// HTTPS
var https = require('https');
var fs = require('fs')


// read in the private key and certificate
var pk = fs.readFileSync('./privatekey.pem');
var pc = fs.readFileSync('./certificate.pem');
var opts = {
    key: pk,
    cert: pc
};


// create the secure server
var serv = https.createServer(opts, function(req, res) {
    console.log(req);
    res.end();
});


// listen on port 443  (if not reserved)
serv.listen(443, '0.0.0.0');