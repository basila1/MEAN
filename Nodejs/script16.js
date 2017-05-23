var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

app.use('/cssFiles', express.static(__dirname + '/assets'));

app.get('/', function (req, resp) {
  resp.sendFile('index.html', {root: path.join(__dirname, './files')});
});

app.get(/^(.+)$/, function (req, resp) { //regular expression matches any file that begins with one or more characters
  console.log(req.params);
  //then it will try to run this code
  try {
    //if it is a file indeed -> isFile() then throw the file
    if (fs.statSync(path.join(__dirname, './files', req.params[0]+'.html')).isFile()) {
      resp.sendFile(req.params[0]+'.html', {root: path.join(__dirname, './files')});
    }
    //else catch the error, and send the 404.html file.
  } catch(err) {
    resp.sendFile('404.html', {root: path.join(__dirname, './files')});
  }
});

app.listen(1337, function () {
  console.log('Example app listening on port 1337!');
});
