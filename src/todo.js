export default class todo {
  constructor(taskName, dueDate) {
    this.taskName = taskName;
    this.dueDate = dueDate;
  }

  displayName() {
    return this.taskName;
  }

  displayDueDate() {
    return this.dueDate;
  }
}
