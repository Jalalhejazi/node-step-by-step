node-step-by-step
=================

building nodejs REST-API-SPA-mongodb-cloud-hosting

## Step17_SPA_mongo_cloud (addressbook)

Cloud mongoDB and Single Page App frontend

<img src="images/server-js.png" alt="">



mongodb in cloud <a href="http://modulus.io">modulus.io</a> 

    mongodb://<user>:<pass>@novus.modulusmongo.net:port/DatabaseName 



<img src="images/modulus-db-admin.png" alt="">



(Read-Only) persmissions is assigned to the user guest, the password=password 
<br>
If you try to make any write operation like PUT, POST, DELETE you get error 500
<br>
please create a new account for your own CRUD operations. 
    
    mongodb://guest:password@novus.modulusmongo.net:27017/osi4Vovy

from a Terminal make a connection test with mongo
    
    $ mongo novus.modulusmongo.net:27017/osi4Vovy -u guest -p password

<img src="images/mongo-terminal-guest-user.png" alt="">

    db.addressbook.find().pretty()

    {
        "_id" : ObjectId("53177084f0ccd69ac5d91559"),
        "firstName" : "jalal",
        "lastName" : "hejazi",
        "email" : "jalal.hejazi@gmail.com",
        "phone" : "1111111"
    }
    {
        "_id" : ObjectId("53177e1ef0ccd69ac5d9155f"),
        "firstName" : "Jacob",
        "lastName" : "Jacobsen",
        "email" : "Jacob.Jacobsen@gmail.com",
        "phone" : "01234345"
    }



<img src="images/cloud-mongo.png" alt="">



## Why NoSQL (mongodb) ?

<a href="http://about_node.itacademy.dk/nosql/">
    http://about_node.itacademy.dk/nosql/
</a>
