import Model from "./model";
import View from "./view";

class Controller {

    constructor () {
        this.view = new View();
        this.model = new Model();
        this.view.bindRender(this.handleRender);
        this.view.bindAdd(this.handleAdd);
    }

    handleRender = (toDoOrProject) => {
        let data = this.returnToDoOrPoject(toDoOrProject);
        this.view.purgeCurrentView();
        data.forEach(ele => {
            this.view.render(ele['id']);
        });
    }

    handleAdd = (toDoOrProject, counter) => {
        if (toDoOrProject === 'ToDo') {
            this.model.createTodo(counter);
        } else {
            this.model.createProject(counter);
        }
        this.handleRender(toDoOrProject);
        this.view.bindDelete(this.handleDelete);
    }

    handleDelete = (toDoOrProject, id) => {
        if (toDoOrProject === 'ToDo') {
            this.model.deleteToDo(id);
        } else {
            this.model.deleteProject(id);
        }
        this.handleRender(toDoOrProject);
    }

    returnToDoOrPoject (toDoOrProject) {
        return toDoOrProject === 'ToDo' ? this.model.toDoS : this.model.projects;
    }

    run () {
        
    }

}

export default Controller;