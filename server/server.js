var express = require('express');
var app = express();
var http = require('http').Server(app);

const port = process.env.PORT || 8080;

app.use(express.static('../frontend'));

http.listen(port, function(){
  console.log(`hello.\nlistening on ${port}.`);
});

app.get('/', function (req, res) {
  res.send("__hi__");
});
