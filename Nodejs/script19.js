//POST

var express = require('express');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();

//middleware
app.use(bodyParser());

app.use('/cssFiles', express.static(__dirname + '/assets'));

app.get('/', function (req, resp) {
  resp.sendFile('index.html', {root: path.join(__dirname, './files')});
});

app.post('/', function (req, resp) {
  //resp.sendFile('index.html', {root: path.join(__dirname, './files')});

  //server sends code to middleware --> which processes the code and then sends it back to the browser.
  //need a middleware to work with the post response. BODYPARSER!!!

  resp.end(JSON.stringify(req.body));
});


app.listen(1337, function () {
  console.log('Example app listening on port 1337!');
});
