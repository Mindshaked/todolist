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
let projectList = [defaultProject];



function projectStorageSet() {
    localStorage.setItem("projects", JSON.stringify(projectList));
    }


    

function projectStorageGet() {
    let projectGet = JSON.parse(localStorage.getItem("projects"));
    console.log(projectGet)
    return projectGet;
}


//change which project is selected

let projectSelected = [];

function changeProjectSelected(project){
    projectSelected = project;
    let projectTitle = document.getElementById("project-title");
    projectTitle.innerHTML = projectSelected.name;
    return projectSelected;
}

changeProjectSelected(defaultProject);





//Show the projects in the projectList array

function showProjectList(){
    const projectSection = document.getElementById("project-list");

    removeAllChildNodes(projectSection);

    projectList = projectStorageGet();

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


const taskFactory = (name, description, date, priority) => {
    const position = projectSelected.listOfTask.length + 1;
    let taskState = "unfinished";

    function taskStatus(taskState){
        if (taskState == "unfinished"){
            this.taskState = "finished";
        } else  if (taskState == "finished"){
            this.taskState = "unfinished";
        }
        
    }


    return  {name, description, date, position, priority, taskState, taskStatus};
};

const defaultTask = taskFactory("default task", "write anything here", "02/03/2023", "low");
projectSelected.listOfTask.push(defaultTask);

 
const numberOfTasks = document.getElementById("number-of-tasks");
numberOfTasks.innerHTML = "Tasks (" + projectSelected.listOfTask.length + ")";

function showTaskList(){

    
    const taskSection = document.getElementById("task-list");
    
    
   

    removeAllChildNodes(taskSection);


    for (let i = 0; i < projectSelected.listOfTask.length; i++ ){

        const actualTask = projectSelected.listOfTask[i];

        const taskCheck = document.createElement("INPUT");
        taskCheck.setAttribute("type", "checkbox");
 
        const taskSlot = document.createElement("div");
        taskSlot.className = "taskSlot"

        const taskMainElements = document.createElement("div");
        taskMainElements.className = "taskMain";

        const taskName = document.createElement("div");
        taskName.innerText = actualTask.name;
        taskName.className = "taskName"

        const taskIcons = document.createElement("div");
        taskIcons.className = "taskIcons";

        const taskDate = document.createElement("div");
        taskDate.className = "taskDate";
        taskDate.innerText = actualTask.date;

        const eraseButton = document.createElement("button");
        eraseButton.className = "eraseTask";
        eraseButton.innerText = "X";

        

        eraseTaskButton(eraseButton, i);

        newPosition(actualTask, i);

        taskCheckBox(taskCheck, actualTask, taskSlot);



        
        taskMainElements.appendChild(taskCheck);
        taskMainElements.appendChild(taskName);
        taskSlot.appendChild(taskMainElements);
        taskSlot.appendChild(taskIcons);
        taskIcons.appendChild(taskDate);
        taskIcons.appendChild(eraseButton);
        taskSection.appendChild(taskSlot);
    }
}

showTaskList();



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

    projectStorageSet();


}

// form to add projects

projectForm.addEventListener("submit", function(event) {

    let projectName = projectForm["project-name"].value;

    let newProject = projectFactory(projectName);

    addProjectToList(newProject);


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

    console.log(date);

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



//function for the button to remove THIS task or Project

function eraseTaskButton(eraseButton, i){

    
    eraseButton.addEventListener('click', function() {
        let taskIndex = projectSelected.listOfTask[i].position - 1;
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


//check the state of the checkbox of every task

function taskCheckBox(taskCheck, actualTask, taskDom){

    taskCheck.addEventListener("change", function(){
        if (taskCheck.checked == true) {
            actualTask.taskStatus("unfinished");
            taskDom.classList.add("taskCompleted");
            console.log(actualTask.taskState);
        } else if (taskCheck.checked == false) {
            actualTask.taskStatus("finished");
            taskDom.classList.remove("taskCompleted");
            console.log(actualTask.taskState);
        }
    })

};