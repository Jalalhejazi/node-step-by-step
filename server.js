PORT = 8000
sys = require('sys')
http = require('http')

callback = function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    })
    res.write('Hello World from nodejs ...')
    res.end()
}

http.createServer(callback).listen(PORT)

console.log('Server at http://localhost:' + PORT + '/')