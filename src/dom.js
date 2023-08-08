const mainPage = function loadMainPage(){
    const content = document.getElementById("content");

    const projectList = document.createElement("div");
    projectList.setAttribute("id", "project-list")

    const taskList = document.createElement("div");
    taskList.setAttribute("id", "task-list");

    const numberOfTasks = document.createElement("div");
    numberOfTasks.setAttribute("id", "number-of-tasks");

    const newTaskSection = document.createElement("div");
    newTaskSection.setAttribute("id", "newtask-section");

    const newTask = document.createElement("button");
    newTask.setAttribute("id", "task-button");
    newTask.innerText = "New Task";

    const newProject = document.createElement("button");
    newProject.setAttribute("id", "project-button");
    newProject.innerText = "New Project";

    const header = document.createElement("div");
    header.setAttribute("id", "header");
   
    console.log(taskList);
    
    taskList.appendChild(numberOfTasks);
    header.appendChild(newProject);
    content.appendChild(projectList);
    content.appendChild(taskList);
    content.appendChild(header);
    header.appendChild(newTask);

}

export {mainPage};