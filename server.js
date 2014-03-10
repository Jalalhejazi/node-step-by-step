
var express = require('express') ;
var util = require('util');


// routes
var db = require('./routes/db') ;

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

// ******************** configurations ******************//

app.configure(function(){

    // Service any Template using html
    app.set('view engine', 'html');
   
    // use the public folder as static pages
    app.use(express.static('public'));
   
    //expressjs.com/api.html#res.jsonp
    app.set('jsonp callback name', 'success');

    // this globalInterceptor is called on every route
    app.use(globalInterceptor);

})




// ******************** ROUTES ******************//

// -> calling globalInterceptor
app.get("/db", db.getData );

// -> calling singleInterceptor
app.get("/validate", singleInterceptor, db.validate);


app.listen(PORT, function() {
    console.log("REST API is running on port>  " + PORT + "\nsupport jsonp ")
});