import Controller from "./controller";

class Model {

    constructor () {
        this.toDoS = [];
        this.projects = [];
        this.today = [];
        this.todo = {id:'',name:'',description:'',date:'' , proToID : []};
        this.project = {id:'',name:'',description:'', date:'', proToID: []};
    }

    createTodo (counter, toDoName ='', toDoDescription='', toDoDate='', in_projectID=[]) {
        this.todo = {id : counter, type: 'todo', name: toDoName, description: toDoDescription, date: toDoDate, proToID : in_projectID};
        this.toDoS.push(this.todo);
    };

    createProject (counter, projectName, projectDescription, projectDate='', in_toDoIDS = []) {
        this.project = {id:counter, type: 'project', name: projectName, description: projectDescription, date: projectDate, proToID : in_toDoIDS};
        this.projects.push(this.project);
    };

    mergeProjectTodo (toDoID, projectID) {
      this.toDoS.filter(toDo => toDo['id'] === toDoID ? toDo['proToID'] = projectID : '');
      this.projects.filter(project => project['id'] === projectID ? project['proToID'].push(toDoID) : '');
    };

    deleteProject (project) {
       const id = project['id'];
       const todos = project['toDoIDS'];
       this.projects = this.projects.filter(project => project['id'] !== id);
       todos.forEach(id => this.toDoS.map(todo => todo['id'] === id ? todo['proToID'] = '' : ''));
    };

    deleteToDo (toDo) {
        const id = toDo['id'];
        const project = toDo['proToID'];
        this.toDoS = this.toDoS.filter(toDo => toDo['id'] !== id);
        this.projects.forEach(pro => pro['id'] === project ? pro['proToID'] = [] : '')
     };
};

export default Model;