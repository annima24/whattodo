import Project from './project';
import todo from './todo';

const projects = [];

const task = new todo('dishes', 'asap');
const task2 = new todo('laundry', 'saturday');
const task3 = new todo('dishessss', 'asapsss');
const task4 = new todo('laundrysss', 'saturdaysss');
const task5 = new todo('dishes', 'asap');
const task6 = new todo('laundry', 'saturday');
const task7 = new todo('dishessss', 'asapsss');
const task8 = new todo('laundrysss', 'saturdaysss');

const proj = new Project('projectt');
const proj2 = new Project('projection');
projects.push(proj);
projects.push(proj2);
proj.addTask(task);
proj.addTask(task2);
proj2.addTask(task3);
proj2.addTask(task4);
proj2.addTask(task5);
proj2.addTask(task6);
proj2.addTask(task7);
proj2.addTask(task8);

export default class UI {
  //use appropriate methods to load up the UI
  static loadContent() {
    return this.loadProjects();
  }

  //displays the projects on the left side of the screen
  static loadProjects() {
    const leftSide = document.querySelector('.left-side');
    //loop over projects array
    projects.forEach((project, i) => {
      //create a new div for each object in the array
      const projectDiv = document.createElement('p');
      //use the displayName method that is on the project object
      projectDiv.textContent = project.displayName();
      //adding a class
      projectDiv.classList.add('project');
      //assigning a dataset, for use with event listener
      projectDiv.dataset.number = i;
      //append to the project side of the screen
      return leftSide.appendChild(projectDiv);
    });
    //event listener that displays the todos of a project that has been selected
    this.selectProject();
  }
  //event handler that determines if a project has been clicked
  static selectProject() {
    const projectList = document.querySelectorAll('.project');
    projectList.forEach((project) => {
      project.addEventListener('click', function () {
        return UI.displayProjectTasks(project.dataset.number);
      });
    });
  }
  //display the tasks of a selected project
  static displayProjectTasks(arrayNum) {
    const rightSide = document.querySelector('.right-side');
    rightSide.textContent = '';
    //loop over tasks for selected project and create a div for each
    projects[arrayNum].tasks.forEach((task) => {
      //create the main div for each task and add a class
      const taskDiv = document.createElement('div');
      taskDiv.classList.add('task-div');
      //create the name div and add a class and the text
      const taskNameDiv = document.createElement('div');
      taskNameDiv.classList.add('task-item');
      taskNameDiv.textContent = task.displayName();
      //create the due date div and add a class and the text
      const taskDueDateDiv = document.createElement('div');
      taskDueDateDiv.classList.add('task-item');
      taskDueDateDiv.textContent = task.displayDueDate();
      taskDiv.appendChild(taskNameDiv);
      taskDiv.appendChild(taskDueDateDiv);
      rightSide.appendChild(taskDiv);
      console.log(task.displayName(), task.displayDueDate());
    });
  }
}

//console.log(projects[project.dataset.number].returnTasks());
