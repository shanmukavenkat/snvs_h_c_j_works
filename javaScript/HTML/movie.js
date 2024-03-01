let divContainer = document.getElementById("movieReviewsContainer");
///created the h1 Element
let h1Element = document.createElement("h1");
h1Element.textContent = "Movie Reviews";
divContainer.appendChild(h1Element);
//creating the label Element
let labelElement = document.createElement("label");
labelElement.textContent = "MOVIE TITLE";
divContainer.appendChild(labelElement);
//creating a br tag
let brElement = document.createElement("br");
labelElement.appendChild(brElement);
///created the inputText Element
let inputElement = document.createElement("input");
inputElement.placeholder = "Enter a Movie Name";
inputElement.id = "titleInput";
labelElement.appendChild(inputElement);
//creating a br tag
let brElement1 = document.createElement("br");
labelElement.appendChild(brElement1);
///createing a another label elemenet
let labelElement1 = document.createElement("label");
labelElement1.textContent = "YOUR REVIEW";
labelElement1.classList.add("mt-3");
labelElement.appendChild(labelElement1);
//creating a br tag
let brElement2 = document.createElement("br");
labelElement.appendChild(brElement2);
//creating a textarea Element

let textareaElement = document.createElement("textarea");
textareaElement.placeholder = " Enter Your Review";
textareaElement.rows = "8";
textareaElement.cols = "45";
textareaElement.id = "reviewTextarea";
labelElement.appendChild(textareaElement);
//creating a br tag
let brElement3 = document.createElement("br");
labelElement.appendChild(brElement3);
//creating a button Element
let buttonElement = document.createElement("button");
buttonElement.textContent = "Add";
buttonElement.id = "addBtn";
buttonElement.classList.add("btn", "btn-primary", "mt-2");
labelElement.appendChild(buttonElement);
//creating a onclick function
let inputElementText = document.getElementById("titleInput");
let textareaElementText = document.getElementById("reviewTextarea");
buttonElement.onclick = function() {

    let userText = inputElementText.value;
    localStorage.setItem("message", userText);
    let usertext1 = textareaElementText.value;
    localStorage.setItem("review", usertext1);
    //creating a getitem Element
    let newItem = localStorage.getItem("message");
    let newItem1 = localStorage.getItem("review");
    //clear the fileds
    inputElementText.value = "";
    textareaElementText.value = "";

    //creating a para
    let paraElement = document.createElement("p");
    paraElement.classList.add("font-weight-bold");
    paraElement.textContent = "Movie Title:" + newItem;
    divContainer.appendChild(paraElement);
    //creating a para2
    let paraElement2 = document.createElement("p");
    paraElement2.textContent = newItem1;
    divContainer.appendChild(paraElement2);



}