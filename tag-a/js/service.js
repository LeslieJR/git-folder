 //TODO
 function createTask(){
    let title = document.getElementById('add-title').value;
    let description = document.getElementById('add-description').value;
    if(title.length === 0 && description.length === 0 || title.length === 0 || description.length === 0){
        let myModal = new bootstrap.Modal(document.getElementById('alerta'));
        myModal.toggle();    
    }else{
        console.log('new task: '+title+' & '+description)
    }

    title = document.getElementById('add-title').value = '';
    description = document.getElementById('add-description').value='';
        
    
}

function getTasks(){
    //get all the tasks
    console.log('this will display all the tasks')
}

function editTask(){
    //to edit the title or description of one task
    console.log('modify one task')
}

function deleteTask(){
    //to delete one entire task
    console.log('remove one task')
}