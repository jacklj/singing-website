var express = require('express');
var app = express();
var http = require('http').Server(app);
var cors = require('cors')

const path = require('path');
require('dotenv').config()

const knex = require('./db/knex.js');
const port = process.env.PORT || 8080;

app.use(cors())

http.listen(port, function(){
  console.log(`hello.\nlistening on ${port}.`);
});

// static routes
// need to use __dirname so that these paths are correct in Heroku
const staticDir = path.join(__dirname, 'frontend');
const blogStaticDir = path.join(__dirname, 'blog', 'public');
app.use(express.static(staticDir, {
    extensions: ['html', 'htm'],
}));
app.use('/blog', express.static(blogStaticDir));

// (non-static) routes
app.use(require('./routes/eventRoutes.js'));
app.use(require('./routes/contact.js'));
