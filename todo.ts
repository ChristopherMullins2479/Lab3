import{todointerface} from './todointerface';

class todo implements todointerface{

    constructor(){

    }

    tasks: Array <string> = [];

    addTask(task:string):number
{
    this.tasks.push(task);
    console.log("________________ New Task Added______________");
    console.log("Task Added: " +task);
    return this.tasks.length;
}

listAllTasks()
{
console.log("Here are the tasks: ");

this.tasks.forEach(function(task)
{
    console.log(task);
})

}

deleteTask(task:string){
    let index:number = this.tasks.indexOf(task);
    if(index > -1){
        this.tasks.splice(index,1);
        console.log("__________Task Removed__________");
        console.log("Task " +task+ " has been removed");
    }
    return this.tasks.length
}

}

let todolist = new todo();
todolist.addTask("sleeping");
todolist.addTask("running");

todolist.listAllTasks();