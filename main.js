const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const todoButton = document.querySelector('button');

function buildUniqueId(prefix = 'prefix')
{
    return `${prefix}-${Math.floor(Math.random() * Date.now())}`;
}


/*
    Working with objects
*/
const state = 
{
    taskName: "",
    tasks: 
    [
        {
            id: "todo-0",
            name: "Learn javascript"
        }
    ]
};

function returnTaskObject(name)
{
    /*
    state.tasks.push
    (
        {
            id: buildUniqueId('todo'),
            name
        }
    );
    */
    return {
        id: buildUniqueId('todo'),
        name
    };
}


/*
    Building elements
*/
function buildTodoElement(id, name)
{
    const listItem = document.createElement('li');
    const span = document.createElement('span');
    const liTextContent = document.createTextNode(name);

    span.appendChild(liTextContent);
    listItem.id = id;
    listItem.appendChild(span);
    listItem.appendChild(buildDeleteButton(id));

    return listItem;
}

function buildDeleteButton()
{
    const button = document.createElement('button');
    const deleteTextContent = document.createTextNode('Delete');

    button.setAttribute('type', 'button');
    button.appendChild(deleteTextContent);
    button.addEventListener('click', (event) =>
    {
        //event.target.parentElement.remove();
        handleDeleteButton()
    });

    return button;
}


/*
    Handling user input
*/
function handleInputChange(event)
{
    state.taskName = event.target.value;
}

function handleFormSubmit(event)
{
    event.preventDefault();
    /*
    ...state.tasks = [state tasks complete array]
    */
    state.tasks = [...state.tasks, returnTaskObject(state.taskName)];
    state.taskName = "";

    renderTodoList();
}

function handleDeleteButton(id)
{
    
}


/*
    Rendering content
    after loading page up, submitting form
*/
function renderInput()
{
    todoInput.value = state.taskName;
}

function renderTodoList()
{
    const fragment = document.createDocumentFragment();
    state.tasks.forEach((element) =>
    {
        console.log(element);
        fragment.appendChild(buildTodoElement(element.id, element.name));
    });

    while(todoList.firstChild)
    {
        todoList.firstChild.remove();
    }

    todoList.appendChild(fragment);
}


/*
    Initializtion of form functionality
*/
document.addEventListener("DOMContentLoaded", init);

function init()
{
    todoInput.addEventListener('change', (event) => handleInputChange(event));
    todoForm.addEventListener('submit', handleFormSubmit);

    renderInput();
    renderTodoList();
}