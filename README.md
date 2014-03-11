node-step-by-step
=================


## step22_express_mongo_user_administration

In this step you already know a lot of node programmering and modules.
lets try a new module for mongo called mongoskin (The future layer for node-mongodb-native):  

https://github.com/kissjs/node-mongoskin



## setup

    npm install 
    npm start   

[using nodemon to watch files for any change :](http://nodemon.io/)

<img src="public/images/npm-start.png" alt="">


## start mongo and browse

start mongo-server then browse to port 8000

    mongod 

    > use step22_express_mongo_user_administration

<img src="public/images/mongo-show-dbs.png" alt="">

HTTP REST API (GET /userlist)

    http://localhost:8000/userlist

    [
        {
            username: "Jalal",
            email: "jalal@superusers.dk",
            fullname: "Jalal Hejazi",
            age: "40",
            location: "DK",
            gender: "Male",
            _id: "531f20fe615ced3f200cb25b"
        }
    ]

<img src="public/images/mongo-findOne.png" alt="">

<img src="public/images/mongo-find-pretty.png" alt="">

<img src="public/images/mongo-insert.png" alt="">

<img src="public/images/mongo-remove.png" alt="">

<img src="public/images/code-user.png" alt="">

<img src="public/images/code-server.png" alt="">

