import {mainPage} from "./dom.js";
import '../dist/style.css';

mainPage();

//remove all childs function for removing tasks and projects

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// project display functions and project factory

const projectFactory = (name) => {
    const listOfTask = [];
   // const position = projectList.length + 1;
   const position = 0;
    return {name: name, listOfTask, position};
}


const defaultProject = projectFactory("default-project");

console.log (defaultProject);


let projectList = [defaultProject]



//change which project is selected

let projectSelected = [];

function changeProjectSelected(project){
    projectSelected = project;
    return projectSelected;
}

changeProjectSelected(defaultProject);





//Show the projects in the projectList array

function showProjectList(){
    const projectSection = document.getElementById("project-list");

    removeAllChildNodes(projectSection);

    for (let i= 0; i < projectList.length; i++){

        const eraseButton = document.createElement("button");
        eraseButton.className = "eraseTask";
        eraseButton.innerText = "X";
        
        let projectName = document.createElement("div");

        projectName.className = "projectName";

        projectName.innerText = projectList[i].name;    
        
        newPosition(projectList[i], i);
        
        eraseProjectButton(eraseButton, i);
        
        projectName.addEventListener("click", function(){
            changeProjectSelected(projectList[i]);
            showTaskList()
            console.log(projectName);
            console.log(projectName.listOfTask);
            });
        
        projectName.appendChild(eraseButton);
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


const taskFactory = (name, description, date, priority) => {
    const position = projectSelected.listOfTask.length + 1;
    console.log(position);
    let taskState = "unfinished";

    function taskStatus(taskState){
        if (taskState = "unfinished"){
            taskState = "finished";
        } else {
            taskState = "unfinished";
        }
    }
    return  {name, description, date, position, priority, taskState, taskStatus};
};

const defaultTask = taskFactory("default task", "write anything here", "02/03/2023", "low");
projectSelected.listOfTask.push(defaultTask);



function showTaskList(){

    
    const taskSection = document.getElementById("task-list");

    removeAllChildNodes(taskSection);

    console.log("proyecto seleccionado" + projectSelected.listOfTask)

    for (let i = 0; i < projectSelected.listOfTask.length; i++ ){

        const taskName = document.createElement("div");
        taskName.className = "taskName";

        const eraseButton = document.createElement("button");
        eraseButton.className = "eraseTask";

        eraseTaskButton(eraseButton, i);

        newPosition(projectSelected.listOfTask[i], i);

        taskName.innerText = projectSelected.listOfTask[i].name;
        eraseButton.innerText = "X";

        taskName.appendChild(eraseButton);
        taskSection.appendChild(taskName);
    }
}

showTaskList();

console.log("default project" + defaultProject);
console.log("default task" + defaultTask);
console.log("project list" + projectList)


//form to introduce task information

const form = document.getElementById('task-form');

function showTaskForm(){
        if (form.style.visibility !== 'visible'){
    
            form.style.visibility = 'visible';
            
    
        } else {
            form.style.visibility = 'hidden';
    
        } 
    
}

//form to introduce project information

const projectForm = document.getElementById("project-form");

function showProjectForm(){
    if (projectForm.style.visibility !== 'visible'){

        projectForm.style.visibility = 'visible';
        

    } else {
        projectForm.style.visibility = 'hidden';

    } 

}


//add project to the projectlist

function addProjectToList(newProject){
    projectList.push(newProject);
}

// form to add projects

projectForm.addEventListener("submit", function(event) {

    let projectName = projectForm["project-name"].value;
    
    console.log(projectName);

    let newProject = projectFactory(projectName);

    addProjectToList(newProject);


    console.log(projectList);

    event.preventDefault();

    showProjectForm();

    changeProjectSelected(newProject);

    const defaultTask = taskFactory("default task", "write anything here", "02/03/2023");
    projectSelected.listOfTask.push(defaultTask);

    showProjectList();

    showTaskList();





});

//remove function for PROJECTS

function removeProject(projectIndex){
    projectList.splice(projectIndex, 1);
}



//remove function for TASKS

function removeTaskFromProject(taskIndex){
    projectSelected.listOfTask.splice(taskIndex, 1);
}



//create a new task when the form is submitted

form.addEventListener("submit", function(event) {

    let name = form['name'].value;
    let description = form['description'].value;
    let date = form['date'].value;
    let priority = form['priority'].value;

    let newTask = taskFactory(name, description, date, priority);

    addTaskToProject(newTask);

    console.log(projectSelected);

    event.preventDefault();

    showTaskList();

    showProjectList();

    showTaskForm();



});


//add new task button function

const newTaskButton = document.getElementById("task-button");

newTaskButton.addEventListener('click', function(e) {

    showTaskForm();
});


//add new project button function

const newProjectButton = document.getElementById("project-button");

newProjectButton.addEventListener('click', function(e) {

    showProjectForm();
})



//function for the button to remove THIS task

function eraseTaskButton(eraseButton, i){

    
    eraseButton.addEventListener('click', function() {
        let taskIndex = projectSelected.listOfTask[i].position - 1;
        console.log(projectSelected)
        removeTaskFromProject(taskIndex);
        showTaskList();
    })
};

function eraseProjectButton(eraseButton, i){

    eraseButton.addEventListener('click', function(){
        let projectIndex = projectList[i].position - 1;
        removeProject(projectIndex);
        showProjectList();
        showTaskList();
    })
}
