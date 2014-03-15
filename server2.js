PORT = process.env.PORT_PROD || process.env.PORT_DEV ||  process.env.PORT_TEST || 8000

http = require('http')

callback = function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    })
    res.write('Hello World from nodejs using process.env  ')
    res.end()
}

http.createServer(callback).listen(PORT)

console.log('Server at http://localhost:' + PORT + '/')