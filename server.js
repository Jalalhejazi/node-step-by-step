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
//TODO: writing code using .on('request') event ....






console.log('Server at http://localhost:' + PORT + '/')