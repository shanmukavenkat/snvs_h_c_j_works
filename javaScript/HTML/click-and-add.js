let divElement = document.getElementById("clickCounterContainer");
// let's create a paragraph element
let paraElement = document.createElement("p");
paraElement.textContent = "Click the button to increase the count ";
divElement.appendChild(paraElement);

// let's get the span element value
let spanElement = document.getElementById("counterValue");

// let's retrieve the click count from localStorage or set it to 0 if not present or not valid
let clickCount = localStorage.getItem("clickCount");
if (clickCount === null || isNaN(parseInt(clickCount))) {
    clickCount = 0;
} else {
    clickCount = parseInt(clickCount);
}
spanElement.textContent = clickCount;

// let's create a button element
let buttonElement = document.createElement("button");
buttonElement.textContent = "Click Me!";
buttonElement.classList.add("btn", "btn-primary", "button");
buttonElement.id = "incrementBtn";
divElement.appendChild(buttonElement);

// onclick function
buttonElement.onclick = function() {
    let number = parseInt(spanElement.textContent);
    number++;
    spanElement.textContent = number;
    // update localStorage
    localStorage.setItem("clickCount", number);
}
