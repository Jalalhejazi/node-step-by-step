var express = require('express');
var Gif     = require('./gif').Gif ;
var Gifs    = require('./gif').Gifs ;
var path    = require('path') ;
var package = require(path.join(__dirname, 'package'));


var app     = express();
var server  = require('http').createServer(app);
var port    = package.port || 1234 ;


function buildExternUrl(postnr, dage) {
    var url = "";
    if (dage === "2") {
        url = "http://servlet.dmi.dk/byvejr/servlet/byvejr_dag1?mode=long"
    } else if (dage === "9") {
        url = "http://servlet.dmi.dk/byvejr/servlet/byvejr?tabel=dag3_9"
    } else if (dage === "14") {
        url = "http://servlet.dmi.dk/byvejr/servlet/byvejr?tabel=dag10_14"
    }
    url = url + "&by=" + postnr
    return url
}


app.get('/postnummer/:postnr/dage/:dage/', function(req, res) {
    var postnummer = req.params.postnr;
    var antaldage = req.params.dage;

    var url = buildExternUrl(postnummer, antaldage);
    var byvejr = new Gif(url, req.originalUrl, 60);
    
    byvejr.getGif(res);
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;

    res.status(err.status || 404);

        res.end( '/postnummer/1000/dage/:{2,9,14}/ ');

    next(err);
});



server.listen(port, function() {

    console.log('http://localhost:' + port + '/postnummer/3400/dage/2/  \n');
    console.log('http://localhost:' + port + '/postnummer/3400/dage/9/  \n');
    console.log('http://localhost:' + port + '/postnummer/3400/dage/14/ \n');

});






