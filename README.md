node-step-by-step
=================


## step26_meteor_serverside

<br>
<br>

<img src="public/images/localhost-opgaver.png" alt="">
<br>

med denne branch ønsker vi at brug HTTP.get() på serverside
i stedet for jQuery.ajax() på klientside. <br>
Server-side har bedre performance til at hente store mængde data
fra remote services. 

Send an HTTP GET request. Equivalent to HTTP.call("GET", ...).


## dokumenation til http_call
http://jalal.meteor.com/#http_call


## /Server/fixtures.js 

Med Server-side HTTP.get() hentes data fra servicen ved opstart kun første gang. 


## meteor project structures

    /projectName
        /docs             - Documentation
        /src              - Root directory of all source files
            /client           - [Client only]
                /collections       - Local, unsynced collections
                /compatability     - 3rd party JS libs that export a global symbol
                /conf              - Configuration
                /lib               - Library code (client-only)
                /routers           - As the name implies, define routes here
                /startup           - Code to run on document.ready()
                /stylesheets       - CSS files
                /subscriptions     - Subscribe to publications
                /views             - Contains one nested directory for each module
            /collections       - [Client and Server] Collections and methods that act on the collection
            /lib               - [Client and Server] Library code that is used on client and server
            /packages          - [Client and Server] Meteor, Meteorite and local packages
            /private           - [Server only] Private data files
            /public            - Static files
                /images        - Image files
            /server            - [Server only]
                /publications  - Publish Mongo collections
                /startup       - Code to run when the server starts


