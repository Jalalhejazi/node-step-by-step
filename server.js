express = require('express')
hbs = require('hbs')
app = express()
PORT = 8000

// ******************** configurations ******************//

// Service any Template using html
app.set('view engine', 'html');
// Support hbs -> handlebars {{data}} for any data sent from server to client.
app.engine('html', hbs.__express);
app.use(express.bodyParser());
// use the public folder as static pages
app.use(express.static('public'));


app.set("jsonp callback", true)

//expressjs.com/api.html#res.jsonp
//app.set('jsonp callback name', 'cb');


// ******************** data / db ******************//
data = {
    "name": "a human",
    "address": "home",
    "planet": "The blue planet",
    "way": "The milky way",
    "Galaxy": ["Ez101", "zx332", "z0"],
    "universe": "2"
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
// support jsonp  /?callback=?
// support jsonp  /?callback=myfunction

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