class View {

    constructor () {
        this.todos = document.getElementById('ToDo')
        this.projects = document.getElementById('Project')
        this.today = document.getElementById('Today')
        this.add = document.querySelector('header>span');
        this.header2 = document.querySelector('h2');
        this.views = document.querySelector('.view');
        
    }

    bindDelete(handler,id) {
        const element = document.getElementById(id);
        element.lastChild.addEventListener('click', (event) => {
            handler(element.id, this.header2.textContent);
        })
    }

    header (info) {
        this.header2.textContent = info;
    }

    render = (id = '') => {
        //set sub container id and append respective fields
        if (id !== '') {
            // elements
            const inputName = document.createElement('input');
            inputName.type = 'text';
            inputName.className = 'name';
            const inputDescription = document.createElement('input');
            inputDescription.type = 'text';
            inputDescription.className = 'description';
            const inputDate = document.createElement('input');
            inputDate.type = 'date';
            inputDate.className = 'date';
            const proToIDOption = document.createElement('select');
            proToIDOption.className = 'proToID';
            const button = document.createElement('button');
            button.className = 'delete';
            // container
            const sub = document.createElement('div');
            sub.id = id;
            sub.append(inputName, inputDescription, inputDate, proToIDOption, button);
            // master
            this.views.append(sub);
        }
    }

    purgeCurrentView () {
        while (this.views.childNodes.length > 1) {
            this.views.removeChild(this.views.lastChild);
        };
    }
};

export default View; 

