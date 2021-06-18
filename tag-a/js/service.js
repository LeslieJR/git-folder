 //TODO
 const taskStore = [];
 let counter = 0;

 
//DATA MODEL (API)

  function create(title, description){
    
    if(title.length === 0 && description.length === 0 || title.length === 0 || description.length === 0){
        let modalAlert = new bootstrap.Modal(document.getElementById('alerta'));
        modalAlert.toggle();    
    }
        
    const task = {
        id: counter,
        title: title,
        description: description
    }
     counter += 1;

     taskStore.push(task);

    title = document.getElementById('add-title').value = '';
    description = document.getElementById('add-description').value='';
        
    printTasks();
}



 function getAllTasks(){
    return taskStore;
}

 function getOneTask(id){
    console.log(id)
    if(taskStore[id]){ 
        console.log(taskStore[id])
        return taskStore[id]
       
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
    const taskFound = taskStore.find(task => task.id === id);
    if(taskFound){
      taskStore.splice(taskFound,1);  
    }else{
        alert('task undefined')
    }
      
    
    printTasks();
}

export { create, getAllTasks, getOneTask, editTask, deleteTask}