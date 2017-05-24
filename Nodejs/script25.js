//POST

var express = require('express');
// var path = require('path');
// var fs = require('fs');
var bodyParser = require('body-parser');
var sessions = require('express-session');

//create sessions
var session;

var app = express();


//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//encryption
app.use(sessions({
  secret: 'asfasdfasdfasdfadfasdfasdf',
  resave: false,
  saveUninitialized: true
}))

app.use('/cssFiles', express.static(__dirname + '/assets'));


app.get('/login', function (req, resp) {
  session = req.session;
  if (session.uniqueID) {
    resp.redirect('/redirects');
  }
  resp.sendFile('./files/login.html', {root: __dirname});
});

app.post('/login', function (req, resp) {

  session = req.session;
  if (session.uniqueID) {
    resp.redirect('/redirects');
  }
  //if (req.body.username == 'admin' && req.body.password == 'admin') {
    //create a session
    session.uniqueID = req.body.username;
//  }
  resp.redirect('/redirects');
});

//kill session
app.get('/logout', function(req, res) {
  req.session.destroy();
  res.redirect('/login');
});

app.get('/admin', function(req, res) {
  session = req.session;
  if (session.uniqueID != 'admin') {
    res.send('Unauthorized access');
  }
  res.send('Hello ' + req.session.uniqueID + ' <a href="/logout">KILL SESSION</a>');
});

app.get('/redirects', function (req, res) {
  session = req.session;
  if (session.uniqueID == 'admin') {
    console.log(session.uniqueID);
    res.redirect('/admin');
  } else {
    res.send(req.session.uniqueID + ' not found <a href="/logout">KILL SESSION</a>');
  }
});


app.listen(1337, function () {
  console.log('Example app listening on port 1337!');
});
