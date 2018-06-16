var express = require('express');
var app = express();
var http = require('http').Server(app);
const path = require('path');
require('dotenv').config()
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

const knex = require('./db/knex.js');
const port = process.env.PORT || 8080;

// need to use __dirname so that these paths are correct in Heroku
const staticDir = path.join(__dirname, 'frontend');
const blogStaticDir = path.join(__dirname, 'blog', 'public');

app.use(express.static(staticDir));
app.use('/blog', express.static(blogStaticDir));

http.listen(port, function(){
  console.log(`hello.\nlistening on ${port}.`);
});

app.get('/events', function(req, res, next) {
  knex('shows')
    .join('productions', 'shows.production_id', 'productions.id')
    .join('venues', 'shows.venue_id', 'venues.id')
    .select()
    .then(events => res.status(200).json(events))
    .catch(error => console.warn(error));
});

// POST route from contact form
app.post('/contact', function (req, res) {
  let mailOpts, smtpTrans;
  smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });
  mailOpts = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;',
    to: process.env.GMAIL_USER,
    subject: 'New message from contact form at jacklawrencejones.com',
    text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
  };
  smtpTrans.sendMail(mailOpts, function (error, response) {
    if (error) {
      res.send('contact-failure');
    }
    else {
      res.send('contact-success');
    }
  });
});
