var express = require('express'),
    io = require('socket.io'),
    Gif = require('./gif').Gif,
    Gifs = require('./gif').Gifs;


var app = express(),
    server = require('http').createServer(app),
    io = io.listen(server),
    port = 8080;

function buildInternUrl(postnr, dage) {
    return '/images/' + postnr + '/' + dage + '/byvejr.gif';
}

function buildExternUrl(postnr, dage) {
    var url = "";
    if (dage === "2") {
        url = "http://servlet.dmi.dk/byvejr/servlet/byvejr_dag1?mode=long";
    } else if (dage === "9") {
        url = "http://servlet.dmi.dk/byvejr/servlet/byvejr?tabel=dag3_9";
    } else if (dage === "14") {
        url = "http://servlet.dmi.dk/byvejr/servlet/byvejr?tabel=dag10_14";
    }
    url = url + "&by=" + postnr;
    return url;
}


io.sockets.on('connection', function(socket) {

    socket.on('byvejr', function(data) {
        var internUrl = buildInternUrl(data.postnr, data.dage);
        if (!Gifs[internUrl]) {
            Gifs[internUrl] = new Gif(buildExternUrl(data.postnr, data.dage), internUrl, 60);
        }
        Gifs[internUrl].on(internUrl, function() {
            socket.emit(internUrl);
        });

    });
});


app.get('/images/:postnr/:dage/byvejr.gif', function(req, res) {
    var postnummer = req.params.postnr;
    var antaldage = req.params.dage;
    var url = buildExternUrl(postnummer, antaldage);
    var byvejr = new Gif(url, req.originalUrl, 60);
    byvejr.getGif(res);
});

server.listen(port, function() {

    console.log('http://localhost:' + port + '/images/3400/2/byvejr.gif  \n');
    console.log('http://localhost:' + port + '/images/3400/9/byvejr.gif  \n');
    console.log('http://localhost:' + port + '/images/3400/14/byvejr.gif \n');

});