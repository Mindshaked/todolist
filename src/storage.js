class Storage {
  constructor(root) {
    this.root = root;
  }

  get() {
    let projects = JSON.parse(localStorage.getItem(this.root));
    console.log("storage.get", "projects" + projects);
    return projects;
  }

  set(projectList) {
    localStorage.setItem(this.root, JSON.stringify(projectList));
    console.log("storage.set", projectList);
  }
}
