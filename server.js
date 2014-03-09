
var express = require('express') ;
var util = require('util');


// routes
var db = require('./routes/db') ;
var about = require('./routes/about') ;

var app = express() ;
var PORT = 8000 ;

// ******************** Define any middleware interceptors (proxy/validation)  ******************//

var globalInterceptor = function (req, res, next) {
    console.log(util.format('global interceptor is calling %s', req.path));
    next();
}

var singleInterceptor = function (req, res, next) {
    console.log(util.format('single interceptor is %s', req.path));
    next();
}

// this globalInterceptor is called on every route
app.use(globalInterceptor);


// ******************** configurations ******************//

// Service any Template using html
app.set('view engine', 'html');
// this configuration is useful if you have data in a body of a form submit
app.use(express.bodyParser());
// use the public folder as static pages
app.use(express.static('public'));
// use cookie support
app.use(express.cookieParser('cookies'));
// use session support
app.use(express.session({secret: 'anySecretKey' }));

//expressjs.com/api.html#res.jsonp
app.set('jsonp callback name', 'success');



// ******************** ROUTES ******************//

// HTTP GET /about
app.get("/session", about.getSession);

// HTTP GET /about
app.get("/about", about.getInfo);

// HTTP GET /clear --> delete cookie
app.get("/clear", about.clearCookie);


// HTTP GET / 
// support jsonp  /?success=?
// support jsonp  /?success=myfunction

app.get("/db", db.getData );


app.listen(PORT, function() {
    console.log("REST API is running on port>  " + PORT + "\nsupport jsonp ")
});