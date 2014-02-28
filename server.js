PORT = 8000
sys = require('sys')
http = require('http')

callback = function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    })
    res.write('waiting for any request 	   \n')
    res.write('Hello World from nodejs     \n')
    res.end()
}

//http.createServer(callback).listen(PORT)
server = http.createServer()

server.on('request', callback)

server.listen(PORT)

console.log('Server at http://localhost:' + PORT + '/')