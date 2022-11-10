export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }
  displayName() {
    return this.name;
  }

  addTask(todo) {
    return this.tasks.push(todo);
  }

  returnTasks() {
    this.tasks.forEach((task) => {
      return console.log(task.displayName(), task.displayDueDate());
    });
  }
}
