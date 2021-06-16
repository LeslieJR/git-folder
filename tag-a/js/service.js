 //TODO
 const taskStore = [];
 let counter = 0;

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
    console.log('task id to delete: '+id);
    deleteTask(id);
}

function openTask(id){
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
 
//DATA MODEL (API)

 function createTask(){
    let etitle = document.getElementById('add-title').value;
    let edescription = document.getElementById('add-description').value;
    if(etitle.length === 0 && edescription.length === 0 || etitle.length === 0 || edescription.length === 0){
        let myModal = new bootstrap.Modal(document.getElementById('alerta'));
        myModal.toggle();    
    }
        
    const task = {
        id: counter,
        title: etitle,
        description: edescription
    }
     counter += 1;

     taskStore.push(task);
     console.log(taskStore);

    title = document.getElementById('add-title').value = '';
    description = document.getElementById('add-description').value='';
        
    printTasks();
}



function getAllTasks(){
    //get all the tasks
    return taskStore;
}

function getOneTask(id){
    let index = -1;
    let counter = 0;
    for(let i=0; i<taskStore.length;i++){
        const task = taskStore[counter];
        if(task.id === id){
            index = counter;
        }
        counter += 1;
    }
    if(index >-1){ 
        console.log('task with index > -1'+taskStore[index])
        return taskStore[index]
       
    }else{
        console.log('task is undefined')
        return undefined
    }
}

function editTask(task){
    //let editTaskStore = [...taskStore]
    
    // editTaskStore[id].title = editTitle;
    // editTaskStore[id].description = editDescription;
    // console.log(editTaskStore)
    taskStore.splice(task.id, 1, task);
    printTasks();
}

function deleteTask(id){
    const taskFound = taskStore.find(element => element.id = id);
    taskStore.splice(taskFound,1);
    printTasks();
}