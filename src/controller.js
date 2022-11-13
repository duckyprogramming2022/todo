import Model from "./model";
import View from "./view";

class Controller {

    constructor () {
        this.view = new View();
        this.model = new Model();
        this.todoCounter = 0;
        this.projectCounter = 0;
        this.view.todos.addEventListener('click', () => this.view.render('ToDo', this.model.toDoS));
        this.view.projects.addEventListener('click', () => this.view.render('Project', this.model.projects));
        this.view.add.addEventListener('click', () => {
            const toDoOrProject = this.view.ToDoOrProject();
            if (toDoOrProject === 'ToDo') {
                this.model.createTodo(this.todoCounter+=1);
                this.view.render('ToDo', this.model.toDoS);
            } else if (toDoOrProject === 'Project') {
                this.model.createProject(this.projectCounter+=1);
                this.view.render('Project',this.model.projects);
            }
        })
    }

    updateModel () {
        
    }

    run () {
        this.view.render('');
    }

}

export default Controller;