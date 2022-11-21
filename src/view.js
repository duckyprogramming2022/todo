class View {

    constructor () {
        this.todos = document.getElementById('ToDo')
        this.projects = document.getElementById('Project')
        this.today = document.getElementById('Today')
        this.add = document.querySelector('header>span');
        this.header2 = document.querySelector('h2');
        //views container
        this.views = document.querySelector('.view');
        //master container todo or project
        this.master = document.createElement('div');
        //sub container for todo project elements
        this.sub = document.createElement('div');
        // elements
        this.inputName = document.createElement('input');
        this.inputName.type = 'text';
        this.inputName.className = 'name';
        this.inputDescription = document.createElement('input');
        this.inputDescription.type = 'text';
        this.inputDescription.className = 'description';
        this.inputDate = document.createElement('input');
        this.inputDate.type = 'date';
        this.inputDate.className = 'date';
        this.proToIDOption = document.createElement('select');
        this.proToIDOption.className = 'proToID';
        this.button = document.createElement('button');
        this.button.className = 'delete';
    }

    header (info) {
        this.header2.textContent = info;
    }

    render = (id = '') => {
        //set sub container id and append respective fields
        if (id !== '') {
            this.sub.append(this.inputName, this.inputDescription, this.inputDate, this.proToIDOption, this.button);
            this.views.append(this.sub);
        }
        //set master container id and append to views
        
    }

    purgeCurrentView () {
        // while (this.views.lastChild.childNodes.length > 0) {
        //     this.views.lastChild.removeChild(this.views.lastChild.lastChild);
        // };
        while (this.views.childNodes.length > 1) {
            this.views.removeChild(this.views.lastChild);
        };
    }
};

export default View; 
