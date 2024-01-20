
let  bgContainer = document.createElement("div");
bgContainer.classList.add("bg-container");
document.body.appendChild(bgContainer);

//heading_element
let headingElement = document.createElement("h1");
headingElement.textContent="Grocery store";
headingElement.classList.add("heading");
bgContainer.appendChild(headingElement);

//ul un-order-list
let unOrder_list = document.createElement("ul");
unOrder_list.classList.add("list-container");
bgContainer.appendChild(unOrder_list);




//////|^^^|
//\_-_|-_-|for of loop in javaScript

let groceryItems=["Milk","Peanut Butter","Choco Chips"," Tomato Sauce","Cup Cakes","Noodles"];
//li list
for (let groceryItem of groceryItems){
    let listElement = document.createElement("li");
    listElement.textContent=groceryItem;
    unOrder_list.appendChild(listElement);

}
///checkBox
let checkBox = document.createElement("input");
checkBox.type="checkbox";
checkBox.id="deliveryMode";
bgContainer.appendChild(checkBox);

//label element
let labelElement = document.createElement("label");
labelElement.setAttribute("for","deliveryMode");
labelElement.classList.add("delivery_text");
labelElement.textContent = "Need Home Delivery";
bgContainer.appendChild(labelElement);

let brCreate = document.createElement("br");
bgContainer.appendChild(brCreate);

let buttonElement= document.createElement("button");
buttonElement.classList.add("btn","btn-primary");
buttonElement.textContent = "Proceed to Pay";
bgContainer.appendChild(buttonElement);
