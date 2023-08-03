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
    let toDoList = [];
    return {name, toDoList};

}

const defaultProject = projectFactory("default-project");

let projectList = [defaultProject]



function showProjectList(){
    const projectSection = document.getElementById("project-list");

    for (let i= 0; i < projectList.length; i++){

        const projectName = document.createElement("div");
        projectName.className = "projectName";

        projectName.innerText = projectList[i].name;

        projectSection.appendChild(projectName);
    }

}


showProjectList();

//Task display and task factory

const taskFactory = (name, description, date) => {
    return  {name, description, date};
}

const defaultTask = taskFactory("default task", "write anything here", "02/03/2023")
let taskList = [defaultTask]


function showTaskList(){

    
    const taskSection = document.getElementById("task-list");

    removeAllChildNodes(taskSection);

    for (let i = 0; i < taskList.length; i++ ){

        const taskName = document.createElement("div");
        taskName.className = "taskName";

        taskName.innerText = taskList[i].name;

        taskSection.appendChild(taskName);
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


//add task to the project array

function addTaskToProject(newTask){

    taskList.push(newTask)
}
//create a new task when the form is submitted

form.addEventListener("submit", function(event) {

    let name = form['name'].value;
    let description = form['description'].value;
    let date = form['date'].value;

    let newTask = taskFactory(name, description, date);

    addTaskToProject(newTask);

    console.log(taskList);

    event.preventDefault();

    showTaskList();;


});


//add new task button function

const newTaskButton = document.getElementById("task-button");

newTaskButton.addEventListener('click', function(e) {

    showTaskForm();
});






let toDoList = [];


//task constructor
function Task(){
    let test = 2;
    console.log(test);
}

//Adds a task into the list

function addTaskToList () {

}

Task();

