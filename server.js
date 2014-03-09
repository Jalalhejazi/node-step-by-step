express = require('express')
app = express()
PORT = 8000

// ******************** configurations ******************//

// Service any Template using html
app.set('view engine', 'html');
app.use(express.bodyParser());
// use the public folder as static pages
app.use(express.static('public'));


//app.set("jsonp callback", true)

//expressjs.com/api.html#res.jsonp
app.set('jsonp callback name', 'success');


// ******************** data / db ******************//
data = {
    "name": " I'am a human ",
    "planet": " from the blue planet ",
    "addresss": " my address is milky way ",
    "Galaxy": ["Ez101", "zx332", "z0"],
    "universe": "0001"
}

// ******************** ROUTES ******************//

// HTTP GET /about
app.get("/about", function(req, res) {

    //let the browser know to receive json type
    res.writeHead(200, {
        "Content-Type": "application/json"
    })
    // Let the response be a JSON object
    res.end("\n\n" + JSON.stringify(data) + "\n\n")
})

// HTTP GET / 
// support jsonp  /?success=?
// support jsonp  /?success=myfunction

app.get("/db", function(req, res) {
    console.log('query: ' + JSON.stringify(req.query));

    console.log('params: ' + JSON.stringify(req.params));
    console.log('body: ' + JSON.stringify(req.body));
    console.log('query: ' + JSON.stringify(req.query));

    res.header('Content-type', 'application/json');
    res.header('Charset', 'utf8');

    res.jsonp(data);

})


app.listen(PORT, function() {
    console.log("REST API is running on port>  " + PORT + "\nsupport jsonp ")
})