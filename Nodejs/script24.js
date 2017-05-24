//Advance routing with regex


var express = require('express');
var app = express();
var router = express.Router();


app.use('/users', router);


router.get('/:username(\\w+)', function (req, res) {  //can include many fields --> /:username/:firstname/:lastname
  //will get key value pair {"username" : "basila"}
  res.end(JSON.stringify(req.params));
});


// app.get('/heyThereFirstRouteAgain', function (req, res) {
//   res.end('Basila Nathan!!!');
// });

// app.get('/', function (req, res) {
//   res.end("Basila Nathan");
// });

app.listen(1337, function() {
  console.log("listening on port 1337");
});
