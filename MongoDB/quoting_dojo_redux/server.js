//: Require Express module
var express = require('express');
var app = express();

//: Require Mongoose module
var mongoose = require('mongoose');

//: Require body-parser module
var bodyParser = require('body-parser');

//: Connect to Mongoose DB
mongoose.connect('mongodb://localhost/quoting_dojo');

//Create mongoose schema
var QuoteSchema = new mongoose.Schema({
  name : { type: String, required: true, minlength: 3 },
  quote : { type: String, required: true, maxlength: 20 },
  date : { type: Date, default: Date.now }
})

//Set this schema in our models as 'Quote'
mongoose.model('Quote', QuoteSchema);

//Retrieve this schema from models as 'Quote'
var Quote = mongoose.model('Quote')

//Use native promises
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
  //LANDING PAGE
app.get('/', function(req, res) {
  res.render('index');
})

//MAKE QUOTE
app.post('/quotes', function(req, res) {
  console.log('POST DATA', req.body);

  //create a new quote
  var quote = new Quote({name: req.body.author, quote: req.body.quote});

  //try to save new quote to the database
  quote.save(function(err) {
    if(err) {
      console.log("uh-oh: something went wrong");
      res.render('index', {title: 'you have errors!', errors: quote.errors});
    } else {
      console.log("successfully added a quote!");
      res.redirect('/quotes')
    }
  })
})

  //QUOTES PAGE
app.get('/quotes', function(req, res) {
  Quote.find({}, function(err, quotes) {
    if (err) {
        console.log("something went wrong with db retrieval");
    } else {
      res.render('quotes', {quotes : quotes});
      console.log(quotes);
    }
  }).sort({date : -1})    // Sort by descending order
})
//: Set server to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
