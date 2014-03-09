node-step-by-step
=================

building nodejs step by step (building chat server and later client )


## Step06_express (Express as middle-ware REST API)

<a href="http://expressjs.com/">
    ExpressJS    
</a> is a web application framework that facilitates the rapid and scalable development of node apps.



##  REST API Command-line Tool <a href="http://en.wikipedia.org/wiki/CURL">cURL</a>

    curl http://localhost:8000/about


## JSONP to the rescue

<a href="http://en.wikipedia.org/wiki/JSONP">What is JSONP ?</a>

JSONP is a hack around doing cross domain get requests but requires the cooperation of the server to succeed. Unfortunately, you can't request random websites data (client-side) using JSONP. <br>
We need to set some config in the express app and do things slightly differently (following the documentation) <a href="http://expressjs.com/api.html#res.jsonp">expressjs jsonp support</a>


    curl http://localhost:8000/db




 








