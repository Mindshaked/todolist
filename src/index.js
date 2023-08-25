import {mainPage} from "./dom.js";
import '../dist/style.css';


mainPage();

let projectList = projectStorageGet();

//remove all childs function for removing tasks and projects

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


console.log("projectlist2" + projectList[0].name);


// project display functions and project factory

const projectFactory = (name) => {
    const listOfTask = [];
    
   // const position = projectList.length + 1;
   const position = 0;
    return {name: name, listOfTask, position};
}

//add default project if there's no previous projects stored



if (projectList == []){
    let defaultProject = projectFactory("default-project");
    projectList = [defaultProject];
} else if (projectList == null){
    projectList = [defaultProject];
} else {

}




function projectStorageSet() {
    localStorage.setItem("projects", JSON.stringify(projectList));
    }




function projectStorageGet() {
    let projectGet = JSON.parse(localStorage.getItem("projects"));
    console.log("projectget" + projectGet)
    return projectGet;
}



 

//change which project is selected

let projectSelected = [];

function changeProjectSelected(project){
    projectSelected = project;
    let projectTitle = document.getElementById("project-title");
    projectTitle.innerHTML = projectSelected.name;
    console.log("project selected is" + projectSelected.name);
    console.log(projectSelected.listOfTask);
    return projectSelected;
}

changeProjectSelected(projectList[0]);

console.log("tasksprojectselected" + projectSelected.name);





//Show the projects in the projectList array

function showProjectList(){
    const projectSection = document.getElementById("project-list");

    removeAllChildNodes(projectSection);

    

    for (let i= 0; i < projectList.length; i++){


        let projectName = document.createElement("div");
              
        
        projectName.className = "projectName";

        projectName.innerText = projectList[i].name;    
        
        newPosition(projectList[i], i);
        
       

        const erasePButton = document.createElement("button");
        erasePButton.className = "eraseProject";
        erasePButton.innerText = "X";
        erasePButton.style.opacity = "0";
        projectName.onmouseover = function(){
            erasePButton.style.opacity = "1";
        }
        projectName.onmouseout = function(){
            erasePButton.style.opacity = "0";
        }

        eraseProjectButton(erasePButton, i);
        
        projectName.addEventListener("click", function(){
            changeProjectSelected(projectList[i]);
            showTaskList()
            console.log(projectName);
            console.log(projectName.listOfTask);
            });
        
        projectName.appendChild(erasePButton);
        projectSection.appendChild(projectName);

        console.log(projectList);

    
    }

}


showProjectList();






//function to push task into project 

function addTaskToProject(taskName){
    projectSelected.listOfTask.push(taskName);


}


//function to assign new position once an item is erased

function newPosition(item, i){
    item.position = i + 1;
    
}




//Task display and task factory


const taskFactory = (name, description, date, priority, notes) => {
    const position = projectSelected.listOfTask.length + 1;
    let taskState = "unfinished";
    const editTask = (name, description, date, priority, notes) => {
        this.name = name;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.notes = notes;
        console.log("edit task works");
    }

    return  {name, description, date, position, priority, taskState, notes, editTask};
};

//if the project has no tasks stored, create a default task

if (projectSelected.listOfTask == [] ){
const defaultTask = taskFactory("default task", "write anything here", "02/03/2023", "low");
projectSelected.listOfTask.push(defaultTask);

}

 
//show the total number of tasks at the top of the page
function showNumberOfTask(){
const numberOfTasks = document.getElementById("number-of-tasks");
numberOfTasks.innerHTML = "Tasks (" + projectSelected.listOfTask.length + ")";
}

// function to create a new div from a task

function createNewTaskSlot(){
    const newTaskSlot = document.createElement("div");
    newTaskSlot.setAttribute("id", "new-task-slot");
    newTaskSlot.innerText = "New Task";
    taskSection.appendChild(newTaskSlot);
    fastNewTask(newTaskSlot);
    }


const taskSection = document.getElementById("task-list");


 
    //add expand functionality to tasks

    function expandTaskFunctionality(task, taskDescription, taskNotes){
        console.log("esto es taskdesc" + taskDescription);
        
        
        task.addEventListener("click", function(e){

            if (task.classList.contains("taskSlot")){
            task.classList.remove("taskSlot");
            task.classList.add("taskSlotExpanded");
            taskDescription.classList.remove("task-description");
            taskDescription.classList.add("task-description-expanded");
            if (taskDescription.innerHTML == ""){
            taskDescription.innerHTML = "Add a description";
        }
            if (taskNotes != undefined){
            taskDescription.appendChild(taskNotes);
            } else {

            }
            
        } else {
            task.classList.remove("taskSlotExpanded");
            task.classList.add("taskSlot");
            taskDescription.classList.remove("task-description-expanded");
            taskDescription.classList.add("task-description");
            taskDescription.removeChild(taskNotes)
            if (taskDescription.innerHTML == "Add a description"){
                taskDescription.innerHTML = "";
            }
        }
        })
    } 



    //show tasks from selected project

function showTaskList(){
   

    removeAllChildNodes(taskSection);

    showNumberOfTask()


    for (let i = 0; i < projectSelected.listOfTask.length; i++ ){

        const actualTask = projectSelected.listOfTask[i];
 
        const taskSlot = document.createElement("div");
        taskSlot.className = "taskSlot"
        if (actualTask.priority == "high"){
            taskSlot.classList.add("urgent-task");
        }

        const taskCheck = document.createElement("INPUT");
        taskCheck.setAttribute("type", "checkbox");
        taskCheck.className = "check-box";
        if (actualTask.taskState == "finished"){
            taskSlot.classList.add("taskCompleted");
            taskCheck.checked = true;
        } 

        const taskMainElements = document.createElement("div");
        taskMainElements.className = "taskMain";

        const taskName = document.createElement("div");
        taskName.innerText = actualTask.name;
        taskName.className = "taskName";

        const taskDesc = document.createElement("span");
        taskDesc.innerText = actualTask.description;
        taskDesc.className = "task-description";

        const taskNotes = document.createElement("div");
        taskNotes.innerText = "Notes: " + actualTask.notes;
        taskNotes.className = "task-notes";

        const taskIcons = document.createElement("div");
        taskIcons.className = "taskIcons";

        const taskDate = document.createElement("div");
        taskDate.className = "taskDate";
        taskDate.innerText = actualTask.date;

        const taskEdit = document.createElement("img");
        taskEdit.className = "task-edit";
        taskEdit.src = "./assets/images/icons/edit-button.svg"


        const eraseButton = document.createElement("button");
        eraseButton.className = "eraseTask";
        eraseButton.innerText = "X";

        
        expandTaskFunctionality(taskSlot, taskDesc, taskNotes)

        editTaskDetails(taskEdit, actualTask);

        eraseTaskButton(eraseButton, i);

        newPosition(actualTask, i);

        taskCheckBox(taskCheck, actualTask, taskSlot);

        

        
        taskMainElements.appendChild(taskCheck);
        taskMainElements.appendChild(taskName);
        taskMainElements.appendChild(taskDesc);
        taskSlot.appendChild(taskMainElements);
        taskSlot.appendChild(taskIcons);
        taskIcons.appendChild(taskDate);
        taskIcons.appendChild(taskEdit);
        taskIcons.appendChild(eraseButton);
        taskSection.appendChild(taskSlot);
    }

  
    
    createNewTaskSlot();
  
    
}

showTaskList();



//hide or show forms

const newTaskForm = document.getElementById('task-form');
const editTaskForm = document.getElementById('edit-task-form');
const projectForm = document.getElementById("project-form");


console.log(editTaskForm.style.visibility)

/*
function showForm(form){
        if (form.style.visibility !== 'visible'){
    
            form.style.visibility = 'visible';
            
    
        } else {
            form.style.visibility = 'hidden';
    
        } 
    
}
*/

function showForm(form){
    if (form.style.width !== "20%"){
        form.style.width = "20%";
        form.style.visibility = 'visible';
        form.style.right = "0vw";
    } else {
        form.style.width = "0%";
        form.style.visibility = 'hidden';
        form.style.right = "-10vw";
    }
}




//add project to the projectlist

function addProjectToList(newProject){
    projectList.push(newProject);

    projectStorageSet();


}

// form to add projects

projectForm.addEventListener("submit", function(event) {

    let projectName = projectForm["project-name"].value;

    let newProject = projectFactory(projectName);

    addProjectToList(newProject);


    event.preventDefault();

    showForm(projectForm);

    changeProjectSelected(newProject);

    const defaultTask = taskFactory("default task", "write anything here", "02/03/2023");
    projectSelected.listOfTask.push(defaultTask);

    projectStorageSet();

    showProjectList();

    showTaskList();





});

//remove function for PROJECTS

function removeProject(projectIndex){
    projectList.splice(projectIndex, 1);

    projectStorageSet()
    
}



//remove function for TASKS

function removeTaskFromProject(taskIndex){
    projectSelected.listOfTask.splice(taskIndex, 1);

    projectStorageSet()
}

//form validation for task

function validateForm(input){
    if (input == "") {
        alert("You need to add a name for your task");
        return false;
    } else {
        return true;
    }

}






//create a new task when the form is submitted

newTaskForm.addEventListener("submit", function(event) {



    let name = newTaskForm['name'].value;
    let description = newTaskForm['description'].value;
    let date = newTaskForm['date'].value;
    let priority = newTaskForm['priority'].value;
    let notes = newTaskForm['notes'].value;

    
    if (validateForm(name) == false) {
        event.preventDefault();
        return;
    }
    

    let newTask = taskFactory(name, description, date, priority, notes);

    
    addTaskToProject(newTask);

    projectStorageSet()

    console.log(projectSelected);

    event.preventDefault();

    showTaskList();

    showProjectList();

    showForm(newTaskForm);

   



});


//add new task button function

const newTaskButton = document.getElementById("task-button");

newTaskButton.addEventListener('click', function(e) {

    showForm(newTaskForm);
});


//add new project button function

const newProjectButton = document.getElementById("project-button");

newProjectButton.addEventListener('click', function(e) {

    showForm(projectForm);
})

//add fast new task function

function fastNewTask(newTaskFastButton){

  
    function addFastTask(){

        let newTaskInput = document.createElement("input");
        newTaskInput.setAttribute("type", "text");
        newTaskInput.setAttribute("id", "new-task-slot-input");
        newTaskInput.placeholder = "Add a name for your task";
        newTaskFastButton.innerText = "";
        newTaskFastButton.appendChild(newTaskInput);
        
      

        function addFastTask(e){
            let name = newTaskInput.value;
            let description = "";
            let date = "";
            let priority = "normal";
            let notes = ""; 
        
            
        
            
        
            let newTask = taskFactory(name, description, date, priority, notes);
        
         
        
            addTaskToProject(newTask);
        
            projectStorageSet()
            
        
            
        
            e.preventDefault();
        
            showTaskList();
        
            showProjectList();
        }
        
        /*
        if (newTaskInput.innerText != ""){
            document.addEventListener('click', function(e){
                addFastTask(e);
                console.log("clicked document");
            });
    
            };
*/
        
        newTaskInput.addEventListener('keypress', function (e){
        if (e.key === 'Enter'){
            addFastTask(e);
            
        }
    });

   

        
    
};


newTaskFastButton.addEventListener('click', addFastTask());

newTaskFastButton.removeEventListener('click', addFastTask());

};
//function for the button to remove THIS task or Project

function eraseTaskButton(eraseButton, i){

    
    eraseButton.addEventListener('click', function() {
        let taskIndex = projectSelected.listOfTask[i].position - 1;
        removeTaskFromProject(taskIndex);
        projectStorageSet()
        console.log(projectList);
        showTaskList();
    })
};

function eraseProjectButton(eraseButton, i){

    
    eraseButton.addEventListener('click', function(){
        if (projectList.length == 1){
            alert("You need atleast one project created");
            return;
        }
        let projectIndex = projectList[i].position - 1;
        removeProject(projectIndex);
        projectStorageSet()
        console.log(projectList);
        showProjectList();
        showTaskList();
    })
}





// edit button functionality

function editTaskDetails(taskEditButton, task){

    taskEditButton.addEventListener('click', function(){

        

       //EVERY TIME YOU PRESS A DIFFERENT EDIT TASK FORM, IT CHANGES ALL OF THE PREVIOUS EDITED TASKS.
        
       
       editTaskForm['name'].value = task.name;
       editTaskForm['description'].value = task.description;
       editTaskForm['date'].value = task.date;
       editTaskForm['priority'].value = task.priority;
       editTaskForm['notes'].value = task.value;

       console.log(task);
       console.log(task.name, task.description, task.date, task.priority, task.value);

       showForm(editTaskForm);
       

       
        editTaskForm.addEventListener("submit", function editTaskFunction(event) {

           
        
            let name = editTaskForm['name'].value;
            let description = editTaskForm['description'].value;
            let date = editTaskForm['date'].value;
            let priority = editTaskForm['priority'].value;
            let notes = editTaskForm['notes'].value;
        
            
            if (validateForm(name) === false) {
                event.preventDefault();
                console.log("not validated");
            } else if (validateForm(name) || task.name == ""){
                console.log("validated, previous name was empty");
                
            } else {

            }
            
            
            
            
            task.name = name;
            task.description = description;
            task.date = date;
            task.priority = priority;
            task.notes = notes;


            console.log(" properties of the form" + name + description + date + priority + notes)
            console.log("task. cosas: " + task.name, task.description, task.date, task.priority, task.notes);
            projectStorageSet()

            
        
            event.preventDefault();
        
            showTaskList();
        
            showProjectList();

           
            showForm(editTaskForm);
        
           
            this.removeEventListener('submit', editTaskFunction)
        
        
        });

      

    });



}




//check the state of the checkbox of every task

function taskCheckBox(taskCheck, actualTask, taskDom){

    taskCheck.addEventListener("change", function(){
        if (taskCheck.checked == true) {
            actualTask.taskState = "finished";
            taskDom.classList.add("taskCompleted");
            console.log(actualTask.taskState);
            projectStorageSet()

        } else if (taskCheck.checked == false) {
            actualTask.taskState = "unfinished";
            taskDom.classList.remove("taskCompleted");
            console.log(actualTask.taskState);
            projectStorageSet()
        }
    })

};