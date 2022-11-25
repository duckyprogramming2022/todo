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
        this.view.purgeCurrentView();
        const toDos = this.model.toDoS;
        const projects = this.model.projects;
        if (toDoOrProject === 'ToDo') {
            const projID = [];
            projects.forEach(proj => projID.push(proj['id']));
            toDos.forEach(ele => this.view.render(ele, projID));
        } else {
            projects.forEach(ele => this.view.render(ele['id']));
        }
        this.view.bindDelete(this.handleDelete);
        this.view.bindEdit(this.handleEdit);
    }

    handleAdd = (toDoOrProject, counter) => {
        if (toDoOrProject === 'ToDo') {
            this.model.createTodo(counter);
        } else {
            this.model.createProject(counter);
        }
        this.handleRender(toDoOrProject);
    }

    handleEdit = (toDoOrProject, field_name, id) => {
        if (toDoOrProject === 'ToDo') {
            this.model.editToDo(id, field_name.className, field_name.value);
        } else {
            this.model.editProject(id, field_name.className, field_name.value);
        }
        this.handleRender(toDoOrProject);
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