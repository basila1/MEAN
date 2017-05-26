var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var MongoClient = require('mongodb');


//we want to start our servers only when the database is connected. Hence, let’s move app.listen into the connect method. We’re also going to create a db variable to allow us to use the database when we handle requests from the browser.
MongoClient.connect('mongodb://abcd:abcd@ds151661.mlab.com:51661/star-wars-quotes', (err, database) => {
  if (err) {
    return console.log(err);
  }
  db = database;
  app.listen(3000, function () {
    console.log("listeing on port 3000!!");
  });
});

//Once the view engine is set, we can begin generating the HTML with our quotes. This process is also called rendering. We can use the render object built into the response object render to do so.
app.set('view engine', 'ejs');
//The urlencoded method within body-parser tells body-parser to extract data from the <form> element and add them to the body property in the request object.
app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json())
//tell Express to make the public folder accessible to the public by using a built-in middleware called express.static
app.use(express.static('public'));

app.get('/', (req, res) => {
  //res.sendFile(__dirname + '/index.html');

  //cursor object contains all quotes from our database. It also contains a bunch of other properties and methods that allow us to work with data easily. One such method is the toArray method.
  var cursor = db.collection('quotes').find().toArray((err, result) => {
    if (err) {
      return console.log(err);
    }
    console.log(result);
    // render index.ejs
    res.render('index.ejs', {quotes: result})
  })
});

//Now, you should be able to see everything in the form field within the req.body object.
app.post('/quotes', (req, res) => {
  console.log(req.body);
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) {
      return console.log(err);
    }
    console.log('saved to the database');
    res.redirect('/');
  })
});

app.put('/quotes', (req, res) => {
  db.collection('quotes')
  .findOneAndUpdate({name: 'Yoda'}, {
    $set: {
      name: req.body.name,
      quote: req.body.quote
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

app.delete('/quotes', (req, res) => {
  db.collection('quotes').findOneAndDelete({name: req.body.name},
  (err, result) => {
    if (err) return res.send(500, err)
    res.send('A darth vadar quote got deleted')
  })
})
