
var express = require('express') ;

// routes
var db = require('./routes/db') ;
var about = require('./routes/about') ;

var app = express() ;
var PORT = 8000 ;

// ******************** configurations ******************//

// Service any Template using html
app.set('view engine', 'html');
app.use(express.bodyParser());
// use the public folder as static pages
app.use(express.static('public'));


//app.set("jsonp callback", true)

//expressjs.com/api.html#res.jsonp
app.set('jsonp callback name', 'success');



// ******************** ROUTES ******************//

// HTTP GET /about
app.get("/about", about.getInfo);

// HTTP GET / 
// support jsonp  /?success=?
// support jsonp  /?success=myfunction

app.get("/db", db.getData );


app.listen(PORT, function() {
    console.log("REST API is running on port>  " + PORT + "\nsupport jsonp ")
});