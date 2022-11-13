import Controller from "./controller";

class View {

    constructor () {
        this.todos = document.getElementById('ToDo')
        this.projects = document.getElementById('Project')
        this.today = document.getElementById('Today')
        this.add = document.querySelector('header>span');
        this.header2 = document.querySelector('h2')
        this.views = document.querySelector('.view')
        this.container = document.createElement('div')
    }

    ToDoOrProject = () => {
        return this.header2.textContent;
    }

    render = (info, data = []) => {
        this.header2.textContent = info;
        this.purgeCurrentView();
        this.createMaster(this.views, this.header2.textContent);
        data.forEach(entry => {
            let element = this.createElements(entry['id']);
            this.structureElements(this.views.lastChild, element.sub, element.name, element.description, element.date, element.proToIDOption, element.del);
        });
        this.buttons = document.querySelectorAll('button');        
    }

    purgeCurrentView () {
        while (this.views.lastChild.childNodes.length > 0) {
            this.views.lastChild.removeChild(this.views.lastChild.lastChild);
        };
        while (this.views.childNodes.length > 1) {
            this.views.removeChild(this.views.lastChild);
        };
    }

    createMaster (parent, idname) {
        this.container.id = idname;
        parent.appendChild(this.container);
    };   

    createElements (idname) {
        let sub = this.createSub(idname);
        let name = this.createInput('name')
        let description = this.createInput('description')
        let date = this.createDate();
        let proToIDOption = document.createElement('select');
        proToIDOption.className = 'proToID';
        let del = this.createButton('Delete');
        return {sub, name, description, date, proToIDOption, del}
    }

    createSub (idname) {
        let sub = document.createElement('div');
        sub.id = idname;
        return sub;
    }

    createInput (textInput) {
        let input = document.createElement('input');
        input.className = `${textInput}`;
        input.placeholder = `${textInput}`;
        input.type = 'text';
        return input
    }

    createDate () {
        let date = document.createElement('input');
        date.className = 'date';
        date.type = 'date';
        return date;
    }

    createButton (textInput) {
        let button = document.createElement('button');
        button.className = `${textInput}`;
        button.textContent = `${textInput}`;
        return button
    }

    structureElements (parent, sub, name, description, date, proToIDOption, del) {
        sub.appendChild(name);
        sub.appendChild(description);
        sub.appendChild(date);
        sub.appendChild(proToIDOption);
        sub.appendChild(del);
        parent.appendChild(sub);
    };

};

export default View; 
