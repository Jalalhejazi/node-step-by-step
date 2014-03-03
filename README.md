node-step-by-step
=================

building nodejs REST-API-SPA-DB

## Step16_SPA_MongoDB (addressbook)

REST DataService backend and Single Page App frontend

database_name: demoDB

<img src="images/getDatabase.png" alt="">



## usage: 

    $ npm install


## start mongod:

    $ mongod
    $ npm start

## mongo administration

    $ mongo

<img src="images/shell_mongo.png" alt="">


    mongo> help

<img src="images/shell_mongo_help.png" alt="">

    mongo> use demoDb 

    mongo> show collections

    mongo> db.addressbook.findOne()

    mongo> db.addressbook.remove({"firstName": "jalal"})


<img src="images/shell_mongo_findOne.png" alt="">

<img src="images/SPA.png" alt="">

## mongodb homepage

<a href="http://www.mongodb.org/">mongodb.org</a>

<a href="http://docs.mongodb.org/manual/core/crud-introduction/">
    mongodb-crud-introduction
</a>


<a href="http://docs.mongodb.org/manual/core/import-export/">
    import-export-json-data
</a>





