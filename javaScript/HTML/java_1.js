let rowElement = document.getElementById('row');

//create a div element
let divElement = document.createElement('div');
rowElement.appendChild(divElement);

//let us create ul element
let ulElement = document.createElement('ul');
divElement.appendChild(ulElement);


//LET US CREATE A LIST OF ELEMENTS
let liElement1 = document.createElement('li');
liElement1.id = "checkbox";
ulElement.appendChild(liElement1);





//let us create a input element
let inputElement = document.createElement('input');
inputElement.type = "checkbox";
inputElement.id = "checkbox1";
inputElement.onclick = function(){
    if(inputElement.checked){
        labelElement.classList.add("underline");
        console.log("checked");
    }else{
        labelElement.classList.remove("underline");
        console.log("unchecked");
    }
}
liElement1.appendChild(inputElement);



//le tus create a label element
let labelElement = document.createElement('label');
labelElement.setAttribute("for","checkbox1")
labelElement.textContent = "Apple";
liElement1.appendChild(labelElement);