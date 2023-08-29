class Project {
  constructor(data) {
    const { name, position, listOfTask } = data;
    this.setName(name);
    this.position = position;
    this.listOfTask = [];
  }

  setName(name) {
    this.name = name;
  }

  addTask(task) {
    this.listOfTask.push(task);
  }

  removeTask(index) {
    this.listOfTask.splice(index, 1);
  }

  updateTask(index, task) {
    this.listOfTask[index] = task;
  }

  show() {
    
  }
}