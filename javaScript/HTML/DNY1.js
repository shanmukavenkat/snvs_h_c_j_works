let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");
let todoList = [
    {
        text: "Learn HTML",
        uniqueNO: 1
    },
    {
        text: "Learn CSS",
        uniqueNO: 2
    },
    {
        text: "Learn JavaScript",
        uniqueNO: 3
    }
];

addTodoButton.onclick = function(){
 onAddTodo();
}
function onTodoStatusChange(checkboxId,labelId){
    let checkboxElement = document.getElementById(checkboxId);
    //console.log(checkboxElement.checked);
    let labelElement = document.getElementById(labelId);
   // if (checkboxElement.checked===true){
     //   labelElement.classList.add("checked");
    //}else{
      //  labelElement.classList.add("checked");
   // }
    labelElement.classList.toggle("checked");
}
function onDeleteTodo(todoId){
    let todoElement=document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement);
}
function createAndAppendTodo(todo) {
    let checkboxId = "checkbox"+todo.uniqueNO;
    let labelId = "label"+todo.uniqueNO;
    let todoId ="todo"+todo.uniqueNO;



    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemsContainer.appendChild(todoElement);
    todoElement.id=todoId;
    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    //----------------------------------checkboxId
    inputElement.id = checkboxId;
    //------------------------------------
    //------------------------------------
    inputElement.onclick = function(){
        onTodoStatusChange(checkboxId,labelId);
    }
    //-----------------------------------------
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    //----------------------------------------------------------------------------------checkboxId
    labelElement.setAttribute("for", checkboxId);
    //----------------------------------------------------------------------------------
    labelElement.id=labelId;
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIcon.onclick = function(){
        onDeleteTodo(todoId);
    }
    deleteIconContainer.appendChild(deleteIcon);
}




function onAddTodo(){
    let todoCount = todoList.length;
    todoCount = todoCount+1;




    let userInputElement = document.getElementById("todoUserInput");
    let userInputValue = userInputElement.value;

    if(userInputValue===""){
        alert("enter Valid Input");
        return;
    }

    let newTodo={
        text:userInputValue,
        uniqueNo:todoCount,
    };
    createAndAppendTodo(newTodo);
    userInputElement.value="";



}


for (let todo of todoList) {
    createAndAppendTodo(todo);
}