//Advance Routing

var express = require('express');
var app = express();
var router = express.Router();

//pass in custom route to enable path routing.
//whenever the node application dtects a request to this url, it will pass on all the functionalty to the middleware (router)
//the router will then be in control.
app.use('/myFirstRoute', router);

//http://localhost:1337/myFirstRoute/heyThereFirstRoute
//can use app.get or router.get
router.get('/heyThereFirstRoute', function (req, res) {
  res.end('Hello there!!!');
});

//http://localhost:1337/myFirstRoute/heyThereFirstRouteAgain
//can use app.get or router.get
router.get('/heyThereFirstRouteAgain', function (req, res) {
  res.end('Basila Nathan!!!');
});

// app.get('/', function (req, res) {
//   res.end("Basila Nathan");
// });

app.listen(1337, function() {
  console.log("listening on port 1337");
});
