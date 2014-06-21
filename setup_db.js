var tasks = [{
    taskId: 1,
    title: 'Learn javascript prototype',
    description: 'prototype in javascript is Object Oriented',
    status: 'done'

}, {
    taskId: 2,
    title: 'Learn to think in module',
    description: 'Modules make your code maintainable',
    status: 'done'
}, {
    taskId: 3,
    title: 'DataAccessLayer Repository Pattern',
    description: 'This implementation is a Proof Of Concept ',
    status: 'in progress using jsonfs ',
    origin:'this content is from ./db/tasks.json file'

}];

var db = require('./DAL/jsonfs.js');
db.connect('./db', ['tasks']);
db.tasks.save(tasks);