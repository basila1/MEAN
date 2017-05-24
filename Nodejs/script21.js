var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());

app.get('/', function (req, res) {
  res.cookie('myFirstCookie', 'looks good');
  res.end('Wow');
});

app.get('/removeCookie', function (req, res) {
  res.clearCookie('myFirstCookie');
  res.end('Wow');
});

app.listen(1337, function () {
  console.log('listening on port 1337!');
});
