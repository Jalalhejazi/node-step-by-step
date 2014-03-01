http = require('http')
qs = require('querystring');


options = {
    host: 'www.google.com',
    port: 80,
    path: '/' + '?' + qs.stringify({
        q: 'next generation search with nodejs'
    })

}

req = http.get(options, function(response) {

    res_data = ''
    response.on('data', function(chunk) {
        res_data += chunk;
    })

    response.on('end', function() {
        console.log(res_data);
    })
})

req.on('error', function(e) {
    console.log("Got error: " + e.message)
})


http.createServer(function(req, res) {
    res.end(res_data)
}).listen(8000)