// GET and POST

var express = require('express');
var path = require('path');
var app = express();

app.use('/cssFiles', express.static(__dirname + '/assets'));

app.get('/', function (req, resp) {
//get data from the user using req.query
  var response = 'Hello ' + req.query.firstName;
  resp.end(response);
  //resp.sendFile('index.html', {root: path.join(__dirname, './files')});

  //resp.end(JSON.stringify(req.query));
});

app.listen(1337, function () {
  console.log('Example app listening on port 1337!');
});
