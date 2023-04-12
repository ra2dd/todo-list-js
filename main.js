const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const todoButton = document.querySelector('button');

function buildUniqueId(prefix = 'prefix')
{
    return `${prefix}-${Math.floor(Math.random() * Date.now())}`;
}

const state = 
{
    taksName: "",
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
    return
    {
        id: buildUniqueId('todo'),
        name
    };
}

function buildTodoElement(id, name)
{
    const listItem = document.createElement('li');
    const span = document.createElement('span');
    const liTextContent = document.createTextNode('name');

    span.appendChild(liTextContent);
    listItem.id = id;
    listItem.appendChild(span);
    listItem.appendChild(buildDeleteButton());

    return listItem;
}

function buildDeleteButton()
{
    const button = document.createElement('button');
    const deleteTextContent = document.createTextNode('Detele');

    button.setAttribute('type', 'button');
    button.textContent = deleteTextContent;
    button.addEventListener('click', (event) =>
    {
        event.target.remove();
    });

    return button;
}

