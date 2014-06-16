
/*

 HTTP **server** that serves JSON data when it receives a GET request to the path '/api/parsetime'. Expect the request to contain a query string with a key 'iso' and an ISO-format time as the value.

For example:

  /api/parsetime?iso=2013-08-10T16:10:15.474Z

The JSON response should contain only 'hour', 'minute' and 'second' properties. For example:

```json
{
  "hour": 16,
  "minute": 10,
  "second": 15
}
```

 /api/unixtime?iso=2014-08-01T00:00:00.000Z


Add second endpoint for the path '/api/unixtime' which accepts the same query string but returns UNIX epoch time under the property 'unixtime'. For example:

```json
{ "unixtime": 1376136615474 }
```

Your server should listen on the port provided by the first argument to your program.

----------------------------------------------------------------------
## HINTS

The `request` object from an HTTP server has a `url` property that you will need to use to *"route"* your requests for the two endpoints.

You can parse the URL and query string using the Node core 'url' module. `url.parse(request.url, true)` will parse content of request.url and provide you with an object with helpful properties.

For example, on the command prompt, type:

```sh
$ node -pe "require('url').parse('/test?q=1', true)"
```

Documentation on the `url` module can be found by pointing your browser here:
  {rootdir:/node_apidoc/url.html}

Your response should be in a JSON string format. Look at `JSON#stringify()` for more information.

You should also be a good web citizen and set the Content-Type properly:

```js
res.writeHead(200, { 'Content-Type': 'application/json' })
```

The JavaScript `Date` object can print dates in ISO format, e.g. `new Date().toISOString()`. It can also parse this format if you pass the string into the `Date` constructor. `Date#getTime()` will also
come in handy.

----------------------------------------------------------------------

*/


var http = require('http')
var url = require('url')

function parsetime (time) {
    console.log(time)

  return {
    hour:   time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
  }
}

function unixtime (time) {
  return { unixtime : time.getTime() }
}

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  var iso       = new Date(parsedUrl.query.iso)

//  console.log('\n toUTCString: '    + iso.toUTCString());
//  console.log('\n toISOString: '    + iso.toISOString());
//  console.log('\n toLocaleString: ' + iso.toLocaleString() +'\n');

  var time =iso

  var result

  if (/^\/api\/parsetime/.test(req.url))
    result = parsetime(time)

  else if (/^\/api\/unixtime/.test(req.url))
    result = unixtime(time)


  if (result) {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end('\n' +  JSON.stringify(result)  + '\n\n')


  } else {
    res.writeHead(404)
    res.end()
  }
})


//server.listen(Number('8000'))


// ask the user for port: 
// node server.js 1234 

//server.listen(Number(process.argv[2]), function(){
//  console.log("running timeServer ....");
//})

server.listen(8005, function(){

  console.log("running timeServer for node05.hejazi.dk/api/parsetime?iso=2014-08-01T16:10:15.000Z ");

})
