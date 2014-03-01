http = require('http')
url = require('url')
PORT = 8000

var server = http.createServer().listen(PORT, 'localhost')

server.on('request', function(req, res) {

    var url_parts = url.parse(req.url, true)

    switch (url_parts.pathname) {

        case '/':

        case '/home':
            res.write('<html><body><h1>home page</h1></body></html>\n')
            break

        case '/about':
            res.write('<html><body><h1>about page</h1></body></html>\n')
            break

        default:
            res.write('<h1>Unknown path: </h1>\n' + JSON.stringify(url_parts))
    }

    res.end()
})

console.log('\n  curl http://localhost:' + PORT + '/')
console.log('\n  curl http://localhost:' + PORT + '/home')
console.log('\n  curl http://localhost:' + PORT + '/about')