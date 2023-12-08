<!--these onIncrement and other two are called as even-listeners -->

let counterElement = document.getElementById("countValue");

function onIncrement() {
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    counterElement.textContent = updatedCounterValue;
    if (updatedCounterValue > 0){
        counterElement.style.color="green";
    }
    else if (updatedCounterValue < 0){
        counterElement.style.color = "red";
    }
    else {
        counterElement.style.color = "black";
    }
}
function onDecrement(){
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) - 1;
    counterElement.textContent = updatedCounterValue;
    if (updatedCounterValue > 0){
        counterElement.style.color="green";
    }
    else if (updatedCounterValue < 0){
        counterElement.style.color = "red";
    }
    else {
        counterElement.style.color = "black";
    }

}
function onReset(){
    updatedCounterValue=0;
    counterElement.textContent = updatedCounterValue;
    if (updatedCounterValue > 0){
        counterElement.style.color="green";
    }
    else if (updatedCounterValue < 0){
        counterElement.style.color = "red";
    }
    else {
        counterElement.style.color = "black";
    }

}
