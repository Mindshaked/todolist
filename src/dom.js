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
    newTask.innerText = "+";

    const projectTitle = document.createElement("div");
    projectTitle.setAttribute("id", "project-title");

    const switchModeButton = document.querySelector(".toggle-btn");
    
    const newProject = document.createElement("button");
    newProject.setAttribute("id", "project-button");
    newProject.innerText = "New Project";

    const newProjectSection = document.createElement("div");
    newProjectSection.setAttribute("id", "newproject-section");

    const header = document.createElement("div");
    header.setAttribute("id", "header");
   
    console.log("tasklist" + taskList);
    console.log("newTask button" + newTask)
    
    newTaskSection.appendChild(newTask);
    newTaskSection.appendChild(numberOfTasks);
    newProjectSection.appendChild(newProject);
    header.appendChild(projectTitle);
    header.appendChild(switchModeButton);
    content.appendChild(projectList);
    content.appendChild(taskList);
    content.appendChild(header);
    content.appendChild(newTaskSection);
    content.appendChild(newProjectSection);
   
    

}

export {mainPage};