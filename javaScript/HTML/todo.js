let  todoItemContainer = document.getElementById("todoItemContainer")

let todoList=[
    {
        text:"Learn HTML"
    },
    {
        text:"Learn CSS"
    },
    {
        text:"Learn JAVASCRIPT"
    }
];


function createAnAppendTodo(todo){
    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container","d-flex","flex-row");
    todoItemContainer.appendChild(todoElement);

    let inputElement= document.createElement("input");
    inputElement.type="checkbox";
    inputElement.id="checkbox";
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    //label creation in the javascript
    let labelContainer = document.getElementById("div");
    labelContainer.classList.add("label-container","d-flex","flex-row");
    todoElement.appendChild(labelContainer);


    let labelElement = document.createElement("label");
    labelElement.setAttribute("for","checkbox");
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    //delete-icon_container
    let deleteIconContainer=document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    //delete-icon
    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far","far-trash-alt","delete-icon");

    deleteIconContainer.appendChild(deleteIcon);
}

createAnAppendTodo(todoList[0]);
createAnAppendTodo(todoList[1]);
createAnAppendTodo(todoList[2]);



































