let toDoCounter = 0;
let clicksCollection = [];



const content = () => {
    const listen = document.querySelector('.view');
    listen.addEventListener('click', () => console.log('click'))
};

const toDoListener = () => { 
    const listen = document.querySelector('header>span');
    listen.addEventListener('click', (event) => {
        clicksCollection.push([event.target.textContent, toDoCounter += 1]);
        controlCommunication();
        toDo.creation();
    });
};

const projectListener = () => {
    const listen = document.querySelector('.project>span');
    listen.addEventListener('click', (event) => {
        clicksCollection.push(event.target);
    });
};

const toDo = (()=>{

    const createToDoContainer = (num) =>  {
        const gridDriv = document.createElement('div');
        gridDriv.className = `grid${num}`;
        return gridDriv;
    };

    const createToDoInputs = (name) =>  {
        const input = document.createElement('input');
        input.className = `${name}`;
        if (name === 'date') {
            input.type = 'date'
        } else {
            input.type = 'text'
        }
        input.placeholder = `${name}`;
        return input;
    };

    const createButtons = (name) => {
        const button = document.createElement('button');
        button.className = `${name}`;
        button.appendChild(document.createElement('i'))
        button.firstChild.className = 'material-symbols-outlined';
        button.firstChild.textContent = `${name}`.split('_')[1];
        return button;
    };

    const creation = () => {
        toDoCounter += 1;  
        //generate container for todo (todo1 = gridElement1)
        const gridElement = createToDoContainer(toDoCounter);
        //generate elements relevant for todo
        gridElement.appendChild(createToDoInputs('ToDo'));
        gridElement.appendChild(createToDoInputs('Description'));
        gridElement.appendChild(createToDoInputs('date'));
        gridElement.appendChild(createButtons('btn_edit'));
        gridElement.appendChild(createButtons('btn_delete'));
        //put todo into grid
        const gridAllToDoS = document.querySelector('.todoGrid')
        gridAllToDoS.appendChild(gridElement);
        return gridElement;
    };

    return {creation};
})();

const controlCommunication = () => {
    console.log(clicksCollection[0]);
    return clicksCollection.pop();
};




export {content, toDoListener,projectListener, controlCommunication};

