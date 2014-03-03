var	request= require('request')
	, EventEmitter = require('events').EventEmitter
	, util = require("util");

var Gifs= {};	

function Gif (externUrl, internUrl, minutter) {
	this.externUrl= externUrl;
	this.internUrl= internUrl;
	this.ms= minutter*60*1000;
	if (!Gifs[internUrl]) {	
		this.internGetGif();
		var me= this;
		setInterval(function () {	
			me.internGetGif();
		},this.ms);
	}
}

util.inherits(Gif, EventEmitter);

Gif.prototype.internGetGif= function () {
	var me= this;
	request.get({uri: this.externUrl, encoding: null}, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
			me.data= body;
	  	Gifs[me.internUrl]= me;
	  	me.emit(me.internUrl);
	  }
	});
};

Gif.prototype.getGif= function (res) {
	var me= this;
	if (Gifs[this.internUrl]) {
		this.respond(res); 
	}
	else {
		request.get({uri: this.externUrl, encoding: null}, function (error, response, body) {
		  if (!error && response.statusCode == 200) {
				me.data= body;
		  	Gifs[me.internUrl]= me;  	
				me.respond(res); 
		  }
		});
	}
};

Gif.prototype.respond= function (res) {
	res.writeHead(200,{'Content-Type': 'image/gif'});
	res.end(Gifs[this.internUrl].data);
};

module.exports.Gif= Gif;
module.exports.Gifs= Gifs;