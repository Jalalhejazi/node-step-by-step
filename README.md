node-step-by-step
=================

building nodejs REST-API-repository-design-pattern

## Step14_DAL_using_json_file_system_v2

<img src="images/console.png" alt="">


    $ npm install

## Solution

+ use the ./DAL/jsonfs.js as DAL Repository for CRUD.
+ use the ./db/tasks.json as JSON-Database.
+ use the db for all CRUD operations


		// initialize the json database with this code:
		node setup_db.js

		// run the app using this code:
		node server.js








