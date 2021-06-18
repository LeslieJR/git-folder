 //TODO
 let myStore = 'tasks';
 let counter = 0;

 
//DATA MODEL (API)

  function getMyStore(){
    let store = JSON.parse(window.localStorage.getItem(myStore));
    console.log(store)
    if(store === null){
        return []
    }else{
        return store
    }
  }
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

    let store = getMyStore();
    console.log(store)
    store.push(task);
    window.localStorage.setItem(myStore, JSON.stringify(store));

    console.log(store);
   
    title = document.getElementById('add-title').value = '';
    description = document.getElementById('add-description').value='';
        
    printTasks();
}



 function getAllTasks(){
    let store = getMyStore(); 
    return store;
}

 function getOneTask(id){
    console.log(id)
    let store = getMyStore(); 
    if(store[id]){ 
        console.log(store[id])
        return store[id]
       
    }else{
        console.log('task is undefined')
        return undefined
    }
}

 function editTask(task){
    let store = getMyStore(); 
    //let editTaskStore = [...taskStore]
    
    // editTaskStore[id].title = editTitle;
    // editTaskStore[id].description = editDescription;
    // console.log(editTaskStore)
    store.splice(task.id, 1, task);
    window.localStorage.setItem(myStore, JSON.stringify(store))
    printTasks();
}

 function deleteTask(id){
    let store = getMyStore(); 
    console.log(store)
    const taskFound = store.find(task => task.id === id);
    if(taskFound){
      store.splice(taskFound,1);  
    }else{
        alert('task undefined')
    }
    window.localStorage.setItem(myStore, JSON.stringify(store))
      
    
    printTasks();
}

export { create, getAllTasks, getOneTask, editTask, deleteTask}