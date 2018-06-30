const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

router.use(require('body-parser').json());

// POST route from contact form
router.post('/api/contact', function(req, res) {
  let mailOpts, smtpTrans;
  smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });
  const from = req.body.name + ' (' + req.body.email + ')';
  mailOpts = {
    from: from,
    to: process.env.GMAIL_USER,
    subject: 'New message from contact form at jacklawrencejones.com',
    text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`,
  };
  smtpTrans.sendMail(mailOpts, function(error, response) {
    if (error) {
      res.send();
      console.log('message sending error: ', req.body);
    } else {
      console.log('Contact form email successfully sent [from ' + from + ']');
      res.send();
    }
  });
});

module.exports = router;
