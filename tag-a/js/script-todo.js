import { create, getAllTasks, getOneTask, editTask, deleteTask} from './service.js'

function getTaskTemplate(task){
    const taskTemplate = 
    `<div class="todo-item row">
       <div class="col-6">
         <div>${task.title}</div>
         <div>${task.description}</div>
       </div>
       <div class="col offset-2">
         <button type="button" class="btn btn-info" data-toggle="modal" data-target="#modal" onclick="openTask(${task.id})">Edit</button> 
         <button type="button" class="btn btn-danger" aria-label="Close" onclick="removeTask(${task.id})">Remove</button>
       </div>  
     </div>`;
     return taskTemplate;
 }

 function printTasks(){
     const allTasks= getAllTasks();
     let taskContainer = document.getElementById('task-container');
     
     taskContainer.innerHTML = "";
     for(let i=0; i<allTasks.length; i++){
        taskContainer.innerHTML += getTaskTemplate(allTasks[i]);
     }   
 }

function removeTask(id){
    console.log('id: '+id)
    deleteTask(id);
}

function openTask(id){
    console.log(id)
    const task = getOneTask(id);
    const newTitle = task.title;
    const newDescription = task.description;
    const editId = task.id;
    document.getElementById('edit-id').value = editId;
    document.getElementById('new-title').value = newTitle;
    document.getElementById('new-description').value = newDescription;

}

function updateValues(){
    let editTitle = document.getElementById('new-title').value;
    let editDescription = document.getElementById('new-description').value;
    let editId = document.getElementById('edit-id').value;
    let task = {
        id: editId,
        title: editTitle,
        description: editDescription
    }
    editTask(task);
}

 function submitTask (){
    let etitle = document.getElementById('add-title').value;
    let edescription = document.getElementById('add-description').value;
    create(etitle, edescription);
    printTasks();
} 



window.submitTask = submitTask
window.printTasks = printTasks
window.removeTask = removeTask
window.openTask = openTask
window.updateValues = updateValues
