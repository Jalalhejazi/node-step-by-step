node-step-by-step
=================

building nodejs step by step (building chat server and later client )


## Step08 (Writing a simple HTTP proxy)

Since the HTTP server and client expose Readable/Writable streams, we can write a simple HTTP proxy simply by pipe()ing the two together.

The ServerRequest is Readable, while the ClientRequest is Writable. Similarly, the ClientResponse is Readable, while the ServerResponse is Writable.


<img src="info.png" alt="">


The code above causes any requests made to 
http://localhost:8000/ to be proxied to Google. 

You can pass queries too, such as 
localhost:8000/?#q=nodejs 

<img src="info1.png" alt="">

ask google for any pdf files with title node.js in any educational site
localhost:8000/?#q=node.js+filetype:pdf+site:*.edu

<img src="info2.png" alt="">








