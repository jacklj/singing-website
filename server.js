var express = require('express');
var app = express();
var http = require('http').Server(app);
var cors = require('cors')

const path = require('path');
require('dotenv').config()

const knex = require('./db/knex.js');
const port = process.env.PORT || 8080;

if (process.env.NODE_ENV !== 'production') {
  app.use(cors());
}

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

// Serve any static files
app.use('/admin', express.static(path.join(__dirname, 'admin/build')));
// Handle React routing, return all requests to React app
app.get('/admin', function(req, res) {
  res.sendFile(path.join(__dirname, 'admin/build', 'index.html'));
});


// (non-static) routes
app.use(require('./routes/eventRoutes.js'));
app.use(require('./routes/contact.js'));

// user authentication
const User = require('./routes/user.js')
app.post('/api/signup', User.signup)
