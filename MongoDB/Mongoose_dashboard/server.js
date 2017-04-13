//: Require Express module
var express = require('express');
var app = express();

//: Require Mongoose module
var mongoose = require('mongoose');

//: Require body-parser module
var bodyParser = require('body-parser');

//: Connect to Mongoose DB
mongoose.connect('mongodb://localhost/mongoose_dash');

//Create mongoose schema
var MongooseSchema = new mongoose.Schema({
  name : { type: String, required: true },
  gender : { type: String, required: true },
  age : { type: String, required: true },
  description : { type: String, required: true },
  created : { type: Date, default: Date.now }
})

//Set this schema in our models as 'Mongoose'
mongoose.model('Mongoose', MongooseSchema);

//Retrieve this schema from models as 'Mongoose'
var Mongoose = mongoose.model('Mongoose')

//use native promises
mongoose.Promise = global.Promise;

// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

//ROUTING
  //LANDING PAGE - diplay all mongoose
app.get('/', function(req, res) {
  res.render('index');
})

  //ADD MONGOOSE PAGE
app.get('/mongoose/new', function(req, res) {
  res.render('newMongoose');
})


//: Set server to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
