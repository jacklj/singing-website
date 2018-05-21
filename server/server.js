var express = require('express');
var app = express();
var http = require('http').Server(app);
const path = require('path');

const port = process.env.PORT || 8080;

// need to use __dirname so that these paths are correct in Heroku
const staticDir = path.join(__dirname, '..', 'frontend');
const blogStaticDir = path.join(__dirname, '..', 'blog', 'public');

app.use(express.static(staticDir));
app.use('/blog', express.static(blogStaticDir));

http.listen(port, function(){
  console.log(`hello.\nlistening on ${port}.`);
});
