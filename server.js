http = require('http')
url = require('url')


server = http.createServer(function(sreq, sres) {
    url_parts = url.parse(sreq.url);
    opts = {
        host: 'google.com',
        port: 80,
        path: url_parts.pathname,
        method: sreq.method,
        headers: sreq.headers
    }

    creq = http.request(opts, function(cres) {
        sres.writeHead(cres.statusCode, cres.headers);
        cres.pipe(sres); // pipe client to server response
    })

    sreq.pipe(creq) // pipe server to client request
})

server.listen(8000, '0.0.0.0')

console.log('Proxyserver running on port 8000 -> a proxy to google.com:80 ')