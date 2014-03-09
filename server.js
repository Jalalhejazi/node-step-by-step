
var express = require('express') ;
var util = require('util');


// routes
var db = require('./routes/db') ;
var about = require('./routes/about') ;
var admin = require('./routes/admin') ;

var app = express() ;
var PORT = 8000 ;



// ******************** Define redis for session proxy  ******************//
/*
    var RedisStore = require('connect-redis')(express);
    app.use(express.session({store: new RedisStore, secret:'anySecretKey' }));

*/

// ******************** Define any middleware interceptors (proxy/validation)  ******************//

var globalInterceptor = function (req, res, next) {
    console.log(util.format('global interceptor is calling %s', req.path));
    next();
}

var singleInterceptor = function (req, res, next) {
    console.log(util.format('single interceptor is %s', req.path));
    next();
}

// singleInterceptor for validate the authentication process
var validateAuthentication = function (req, res, next) {


    if(req.session.user && req.session.user.isAuthenticated){
        next();
    }else{
        res.redirect('/login')
    }
}




// ******************** configurations ******************//

app.configure(function(){

    // Service any Template using html
    app.set('view engine', 'html');
    // this configuration is useful if you have data in a body of a form submit
    app.use(express.bodyParser());
    app.use(express.multipart({defer: true}));
    app.use(express.methodOverride());

    // use the public folder as static pages
    app.use(express.static('public'));
    // use cookie support
    app.use(express.cookieParser('cookies'));
    // use session support
    app.use(express.session({secret: 'anySecretKey' }));

    //expressjs.com/api.html#res.jsonp
    app.set('jsonp callback name', 'success');


    // this globalInterceptor is called on every route
    //app.use(globalInterceptor);

    //authentication using basic user+pass act like interceptors before any global request
    // app.use(express.basicAuth('jalal','password'));

    //authentication using basic user+pass act like interceptor but using validation function callback
    app.use(express.basicAuth(function(user,pass){
        // call any database to validate the user and pass
        return user === pass ;

    }))



})



// ******************** ROUTES ******************//

// HTTP GET /about
app.get("/session", about.getSession);

// HTTP GET /about
app.get("/about", about.getInfo);

// HTTP GET /clear --> delete cookie
app.get("/clear", about.clearCookie);

// HTTP GET /single -> calling singleInterceptor
app.get("/single", singleInterceptor, about.single);



// ******************** admin login ******************//

// HTTP GET /login -> calling admin login
app.get("/signin", admin.signin);

app.post("/signin", admin.validate );

app.get("/private", validateAuthentication ,admin.getPrivateSection);




// HTTP GET / 
// support jsonp  /?success=?
// support jsonp  /?success=myfunction

app.get("/db", db.getData );


app.listen(PORT, function() {
    console.log("REST API is running on port>  " + PORT + "\nsupport jsonp ")
});