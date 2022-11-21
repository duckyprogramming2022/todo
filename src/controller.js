import Model from "./model";
import View from "./view";

class Controller {

    constructor () {
        this.view = new View();
        this.model = new Model();
        this.todoCounter = 0;
        this.projectCounter = 0;
        this.view.todos.addEventListener('click', () => this.render('ToDo'));
        this.view.projects.addEventListener('click', () => this.render('Projects'));
        this.view.add.addEventListener('click', () => {
            const toDoOrProject = this.view.header2.textContent;
            if (toDoOrProject === 'ToDo') {
                this.model.createTodo(this.todoCounter+=1);
                this.render('ToDo');
            } else if (toDoOrProject === 'Projects') {
                this.model.createProject(this.projectCounter+=1);
                this.render('Projects');
            }
        })

    }

    render (what) {
        let toRender = '';
        if (what === 'ToDo') {
            toRender = this.model.toDoS;
        } else {
            toRender = this.model.projects;
        }
        this.view.purgeCurrentView();
        this.view.header(what);
        toRender.forEach(element => this.view.render(element['id']));
    };


    updateModel () {
        console.log('hey');
    }

    run () {
        
    }

}

export default Controller;