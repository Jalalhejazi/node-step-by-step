PORT = 8000
HOST = 'localhost'
sys = require('sys')
http = require('http')

var callback = function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    })
    res.write('Hello World from nodejs using callback...')
    res.end()
}

http.createServer(callback).listen(PORT)

console.log('\n   Server at http://localhost:' + PORT + '/')