var http = require('http'); //http is a module
var server = http.createServer(engine)

server.listen(1337, function() {
  console.log('server was hit by a request');
  //this function calls everytime the server recieves a request from another computer on this port.
}); //the createServer accepts a function.

function engine(request, response) {

  //console.log(response);
  response.writeHead(200, {'Content-Type': 'text/plain'});

  response.end('Hey there from the server! Request from page: ' + request.url);
}
