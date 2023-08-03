const mainPage = function loadMainPage(){
    const content = document.getElementById("content");

    const projectList = document.createElement("div");
    projectList.setAttribute("id", "project-list")

    const taskList = document.createElement("div");
    taskList.setAttribute("id", "task-list");

    const newTask = document.createElement("button");
    newTask.setAttribute("id", "task-button");

}

export {mainPage};