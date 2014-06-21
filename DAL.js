// DataAccessLayer Repository Pattern
// using nodejs, express and javascript prototype
// exported as module
module.exports = TaskRepository;

//TaskRepository class Constructor
function TaskRepository() {

    var db = require('./DAL/jsonfs.js');
    db.connect('./db',['tasks']);

    this.db = db ;
}

/**
 * Find a task by id
 * Param: id of the task to find
 * Returns: the task corresponding to the specified id
 */
TaskRepository.prototype.find = function(id) {
    var task = this.db.tasks.findOne({taskId:id});
    if (null == task) {
        throw new Error('task not found');
    }
    return task;
}

/**
 * Retrieve all tasks
 * Returns: array of tasks
 */
TaskRepository.prototype.findAll = function() {
    return this.db.tasks.find();
}
/**
 * Save a task (create or update)
 * Param: task the task to save
 */
TaskRepository.prototype.save = function(task) {

    // VERSION 03 (UPSERT= UPDATE AND INSERT)
    //////////////////////////////////////////////////////////
    var options = {multi:false,upsert:true};

    this.db.tasks.update({taskId:task.taskId},task,options);

    console.log("TaskRepository.prototype.save: UPSERT ");



    // VERSION 02
    //////////////////////////////////////////////////////////
    // if (task.taskId == null || task.taskId == 0) {
    //     console.log("TaskRepository.prototype.save INSERT");
    //     this.db.tasks.save(task);

    // }else{
    //     console.log("TaskRepository.prototype.save UPDATE");
    //     this.db.tasks.update({taskId:task.taskId},task);
    // };



    // VERSION 01
    //////////////////////////////////////////////////////////
    // if (task.taskId == null || task.taskId == 0) {
    //     task.taskId = this.nextId;
    //     this.tasks.push(task);
    //     this.nextId++;
    // } else {
    //     var index = this.findIndex(task.taskId);
    //     this.tasks[index] = task;
    // }




}
/**
 * Remove a task
 * Param: id the of the task to remove
 */
TaskRepository.prototype.remove = function(id) {

    // VERSION 02
    // remove all matched. Default - multi = true
    //////////////////////////////////////////////////////////
    this.db.tasks.remove({taskId:id},true);

    console.log("TaskRepository.prototype.remove: multi matches ");


    // VERSION 01
    //////////////////////////////////////////////////////////
    // var index = this.findIndex(id);
    // this.tasks.splice(index, 1);
}