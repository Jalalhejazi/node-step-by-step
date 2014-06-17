var http = require('http')
var url = require('url')

function getData (time) {
  return {
	data: "Hello world from getData() in javaScript. "
  }
}


var server = http.createServer(function (req, res) {

  if (/^\/api\/getdata/.test(req.url))
    result = getData()


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

  console.log("running json-server  at port: %s \n/api/getdata ", PORT);

})
