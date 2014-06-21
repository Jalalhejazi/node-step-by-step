node-step-by-step
=================

building nodejs REST-API-repository-design-pattern

## Step14 (Solution using DAL/jsonfs.js integration)

<img src="images/console.png" alt="">


    $ npm install

## Solution

+ refactor the DAL from before to use a real DB from json.
+ use the ./DAL/jsonfs.js as DAL Repository for CRUD.
+ use the ./db/tasks.json as JSON-Database.



		// initialize the json database with this code:
		node setup_db.js

		// run the app using this code:
		node server.js








