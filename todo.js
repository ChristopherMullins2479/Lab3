"use strict";
exports.__esModule = true;
var todo = /** @class */ (function () {
    function todo() {
        this.tasks = [];
    }
    todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("________________ New Task Added______________");
        console.log("Task Added: " + task);
        return this.tasks.length;
    };
    todo.prototype.listAllTasks = function () {
        console.log("Here are the tasks: ");
        this.tasks.forEach(function (task) {
            console.log(task);
        });
    };
    todo.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
            console.log("__________Task Removed__________");
            console.log("Task " + task + " has been removed");
        }
        return this.tasks.length;
    };
    return todo;
}());
var todolist = new todo();
todolist.addTask("sleeping");
todolist.addTask("running");
todolist.listAllTasks();
