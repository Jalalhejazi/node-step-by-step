var http = require('http')
var url = require('url')

function parsetime (time) {
    console.log(time)

  return {
   info: 'this is what you get when using ISO-standard',
    hour:   time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
  }
}

function unixtime (time) {
  return {
		info     : 'this is unixtime (counting seconds back to 1970 :-)',
		unixtime : time.getTime()
	}
}

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  var iso       = new Date(parsedUrl.query.iso)

//  console.log('\n toUTCString: '    + iso.toUTCString());
//  console.log('\n toISOString: '    + iso.toISOString());
//  console.log('\n toLocaleString: ' + iso.toLocaleString() +'\n');

  var time =iso

  var result

 if (/^\//.test(req.url))
        result = {
	  usage: "this is a JSON-timeServer: use this /api  "
         }

  else if (/^\/api/.test(req.url))
	result = { 
	 info1: "you can call me like this /api/parsetime?iso=2014-08-01T16:10:15.000Z  ",
	 info2: "or call me like this /api/unixtime?iso=2014-08-01T16:10:15.000Z  "
	 } 



  else if (/^\/api\/parsetime/.test(req.url))
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


// ask the user for port:
// node server.js 1234

//server.listen(Number(process.argv[2]), function(){
//  console.log("running timeServer ....");
//})


var  PORT  =  8005

server.listen(PORT, function(){

  console.log("running timeServer at port: %s \n/api/parsetime?iso=2014-08-01T16:10:15.000Z ", PORT);

})
