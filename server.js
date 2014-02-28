PORT = 8000;
HOST = '127.0.0.1';

var sys = require('sys'),
    http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.write('Hello World from nodejs ...');
    res.end();

}).listen(PORT, HOST);

console.log("Server at http://" + HOST + ':' + PORT + '/');