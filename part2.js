var tasks = [];
function addTask(task) {
    tasks.push(task);
    console.log("________________ New Task Added______________");
    console.log("Task Added: " + task);
    return tasks.length;
}
function listAllTasks() {
    console.log("Here are the tasks: ");
    tasks.forEach(function (task) {
        console.log(task);
    });
}
function deleteTask(task) {
    var index = task.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
        console.log("__________Task Removed__________");
        console.log("Task " + task + " has been removed");
    }
}
addTask("Go for a walk");
addTask("Cook");
addTask("Code Assignment");
listAllTasks();
deleteTask("cook");
