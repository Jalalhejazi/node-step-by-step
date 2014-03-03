// http://node.supermobile.dk/rest-api-repository-design-pattern/
// DataAccessLayer Repository Pattern
// using nodejs, express and javascript prototype
// exported as module
module.exports = TaskRepository;

//TaskRepository class Constructor 
function TaskRepository() {

    this.tasks = [{
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
        status: 'in progress'

    }];

    this.nextId = 1;
}

/**
 * Find a task by id
 * Param: id of the task to find
 * Returns: the task corresponding to the specified id
 */
TaskRepository.prototype.find = function(id) {
    var task = this.tasks.filter(function(item) {
        return item.taskId == id;
    })[0];
    if (null == task) {
        throw new Error('task not found');
    }
    return task;
}
/**
 * Find the index of a task
 * Param: id of the task to find
 * Returns: the index of the task identified by id
 */
TaskRepository.prototype.findIndex = function(id) {
    var index = null;
    this.tasks.forEach(function(item, key) {
        if (item.taskId == id) {
            index = key;
        }
    });
    if (null == index) {
        throw new Error('task not found');
    }
    return index;
}
/**
 * Retrieve all tasks
 * Returns: array of tasks
 */
TaskRepository.prototype.findAll = function() {
    return this.tasks;
}
/**
 * Save a task (create or update)
 * Param: task the task to save
 */
TaskRepository.prototype.save = function(task) {
    if (task.taskId == null || task.taskId == 0) {
        task.taskId = this.nextId;
        this.tasks.push(task);
        this.nextId++;
    } else {
        var index = this.findIndex(task.taskId);
        this.tasks[index] = task;
    }

}
/**
 * Remove a task
 * Param: id the of the task to remove
 */
TaskRepository.prototype.remove = function(id) {
    var index = this.findIndex(id);
    this.tasks.splice(index, 1);
}