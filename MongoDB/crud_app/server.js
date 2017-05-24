var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//The urlencoded method within body-parser tells body-parser to extract data from the <form> element and add them to the body property in the request object.
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

//Now, you should be able to see everything in the form field within the req.body object.
app.post('/quotes', (req, res) => {
  console.log(req.body);
});

app.listen(3000, function () {
  console.log("listeing on port 3000!!");
});
