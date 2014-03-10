
var express = require('express') ;
var util = require('util');


// routes
var db = require('./routes/db') ;

var app = express() ;
var PORT = 8000 ;


// ******************** configurations ******************//

app.configure(function(){

    // Service any Template using html
    app.set('view engine', 'html');
   
    // use the public folder as static pages
    app.use(express.static('public'));
   
    //expressjs.com/api.html#res.jsonp
    app.set('jsonp callback name', 'success');

})



// ******************** ROUTES ******************//

// HTTP GET / 
// support jsonp  /?success=?
// support jsonp  /?success=myfunction

app.get("/db", db.getData );


app.listen(PORT, function() {
    console.log("REST API is running on port>  " + PORT + "\nsupport jsonp ")
});