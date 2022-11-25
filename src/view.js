class View {

    constructor () {

        //todos
        this.todos = document.getElementById('ToDo');
        this.todoCounter = 0;
        this.projects = document.getElementById('Project');
        this.projectCounter = 0;
        this.today = document.getElementById('Today');
        this.add = document.querySelector('header>span');
        this.header2 = document.querySelector('h2');
        this.header2.textContent = '';
        this.views = document.querySelector('.view');
    }

    bindRender(handler) {
        this.todos.addEventListener('click', () => {
            this.header2.textContent = 'ToDo';
            handler(this.header2.textContent);
        });
        this.projects.addEventListener('click', () => {
            this.header2.textContent = 'Project';
            handler(this.header2.textContent);
        });
    };

    bindAdd(handler) {
        this.add.addEventListener('click', () => {
            const counter = this.header2.textContent === 'ToDo' ? this.todoCounter +=1 : this.projectCounter +=1;
            handler(this.header2.textContent, counter);
        });
    }

    bindEdit(handler) {
        this.views.childNodes.forEach(child => {
            child.addEventListener('change', (event) => {
                event.preventDefault();
                console.log(event.target.parentNode)
                handler(this.header2.textContent, event.target, event.target.parentNode.id);
            })
        })
    }

    bindDelete(handler) {
        this.views.childNodes.forEach(btn => {
            if (btn.lastChild) {
            btn.lastChild.addEventListener('click', (event) => handler(this.header2.textContent, event.target.parentNode.id))}
        });
    }

    purgeCurrentView () {
        while (this.views.childNodes.length > 1) {
            this.views.removeChild(this.views.lastChild);
        };
    }

    render = (ele, arr_ids = []) => {
        //set sub container id and append respective fields
        console.log(ele);
        if (ele !== '') {
            // elements
            const inputName = document.createElement('input');
            inputName.type = 'text';
            inputName.className = 'name';
            inputName.value = ele['name'];
            const inputDescription = document.createElement('input');
            inputDescription.type = 'text';
            inputDescription.className = 'description';
            inputDescription.value = ele['description'];
            const inputDate = document.createElement('input');
            inputDate.type = 'date';
            inputDate.className = 'date';
            inputDate.value = ele['date'];
            const proToIDOption = document.createElement('select');
            proToIDOption.className = 'proToID';
            const opt_selected = document.createElement('option');
            opt_selected.value = '';
            opt_selected.textContent = '';
            opt_selected.defaultSelected;
            proToIDOption.append(opt_selected);
            arr_ids.forEach(arr_id => {
                const opt = document.createElement('option');
                opt.value = arr_id;
                opt.textContent = arr_id;
                proToIDOption.append(opt);
            });
            const button = document.createElement('button');
            button.className = 'delete';
            // container
            const sub = document.createElement('div');
            sub.id = ele['id'];
            sub.append(inputName, inputDescription, inputDate, proToIDOption, button);
            // master
            this.views.append(sub);
        }
    }
};

export default View; 

