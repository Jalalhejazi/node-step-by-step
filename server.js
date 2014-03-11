var express = require('express');
var routes = require('./routes');
var user = require('./routes/user')
var http = require('http');
var path = require('path');

// mongo-database

var monog_url = "mongodb://localhost:27017/step22_express_mongo_user_administration";
var mongo = require('mongoskin');
var db = mongo.db(monog_url, {
    native_parser: true
});


// express middleware
var app = express();
app.set('port', process.env.PORT || 8000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, 'public')));
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

// REST API 
app.get('/', routes.index);
app.get('/userlist', user.userlist(db));
app.post('/userlist/clear', user.userlistClearAll(db));
app.post('/adduser', user.adduser(db));
app.delete('/deleteuser/:id', user.deleteuser(db));


// HTTP SERVER 
http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});