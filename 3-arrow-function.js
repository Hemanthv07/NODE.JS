//
//Goal: Create method to get incomplete tasks
//
// 1. Define getTasksTODo method
// 2. Use filter to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script


const tasks={
    tasks:[{
        text:'Grocery shoping',
        completed:true
    },{
        text:'Clean yard',
        completed:false
    },{
        text:'Film course',
        completed:false
    }],
    getTasksToDo:function(){
        return this.tasks.filter((tasks)=>tasks.completed===false)
        // return tasksToDo
    }
}

console.log(tasks.getTasksToDo())