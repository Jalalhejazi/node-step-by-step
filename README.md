node-step-by-step
=================

building nodejs step by step (building chat server and later client )


## Step07 (HTTP client)

There is also a HTTP client API, which allows you to make HTTP requests and read content from other websites.

### http.get(options, callback) HTTP method to make HTTP GET requests.

http.get() returns a http.ClientRequest object, which is a Writable Stream.

To send a simple GET request, you can use http.get. 

You need to set the following options:

* host: the domain or IP address of the server
* port: the port (e.g. 80 for HTTP)
* path: the request path, including the query string (e.g. 'index.html?section=footer')

To read the response data, you should attach a callback to the 'data' and 'end' events of the returned object. 
You will most likely want to store the data somewhere from the 'data' events, then process it as a whole on the 'end' event.










