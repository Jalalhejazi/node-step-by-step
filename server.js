
var express = require('express') ;
var db = require('./db') ;
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
app.get("/about", function(req, res) {

    //let the browser know to receive json type
    res.writeHead(200, {
        "Content-Type": "application/json"
    })
    // Let the response be a JSON object
    res.end("\n\n" + JSON.stringify(db.data) + "\n\n")
});

// HTTP GET / 
// support jsonp  /?success=?
// support jsonp  /?success=myfunction

app.get("/db", db.getData );


app.listen(PORT, function() {
    console.log("REST API is running on port>  " + PORT + "\nsupport jsonp ")
});