node-step-by-step
=================

building nodejs step by step (building chat server and later client )


## Step09 (HTTPS server and client)

HTTPS server works like the HTTP server.

In fact, the client API is the same, and the HTTPS server only differs in that it needs a certificate file.

The HTTPS server library allows you to serve files over SSL/TLS. To get started, you need to have a SSL certificate from a certificate authority or you need to generate one yourself. 
Of course, self-generated certificates will generally trigger warnings in the browser.

#### Configuration: generating your own certificate

+ openssl genrsa -out privatekey.pem 1024

+ openssl req -new -key privatekey.pem -out certrequest.csr

+ openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem





