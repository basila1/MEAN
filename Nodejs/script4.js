var server = require('http'); //http is a module


server.createServer(engine).listen(1337); //the createServer accepts a function.

function engine(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});

  response.end('Hey there from the server!');
}
