var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var MongoClient = require('mongodb');


//we want to start our servers only when the database is connected. Hence, let’s move app.listen into the connect method. We’re also going to create a db variable to allow us to use the database when we handle requests from the browser.
MongoClient.connect('mongodb://abcd:abcd@ds151661.mlab.com:51661/star-wars-quotes', (err, database) => {
  if (err) {
    console.log(err);
  }
  db = database;
  app.listen(3000, function () {
    console.log("listeing on port 3000!!");
  });
});

//The urlencoded method within body-parser tells body-parser to extract data from the <form> element and add them to the body property in the request object.
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

//Now, you should be able to see everything in the form field within the req.body object.
app.post('/quotes', (req, res) => {
  console.log(req.body);
});
