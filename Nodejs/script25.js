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
  if (req.body.username == 'admin' && req.body.password == 'admin') {
    //create a session
    session.uniqueID = req.body.username;
  }
  resp.redirect('/redirects');
});

//kill session
app.get('/logout', function(req, res) {
  req.session.destroy();
});

app.get('/redirects', function (req, res) {
  session = req.session;
  if (session.uniqueID) {
    console.log(session.uniqueID);
    res.redirect('/admin');
  } else {
    res.end("Who are you ")
  }
})


app.listen(1337, function () {
  console.log('Example app listening on port 1337!');
});
