let arr = [1, 7, 3, 1, 0, 20, 77];
//inputElements
let inputOne = document.getElementById('startIndexInput');
let deleteCountInputElement = document.getElementById('deleteCountInput'); //corrected ID
let itemToAddInputElement = document.getElementById("itemToAddInput"); //corrected ID

let updatedArrayEl = document.getElementById("updatedArray");
const stringifiedArr = JSON.stringify(arr);
updatedArrayEl.textContent = stringifiedArr;
// Button element
let spliceButtonElement = document.getElementById("spliceBtn");

spliceButtonElement.onclick = function arrayUpdate() {
    let startIndexInput = inputOne.value;
    let deleteCountInput = deleteCountInputElement.value;
    let itemToAddInput = itemToAddInputElement.value;

    if (itemToAddInput === "") {
        arr.splice(parseInt(startIndexInput), parseInt(deleteCountInput));
    } else {
        arr.splice(parseInt(startIndexInput), parseInt(deleteCountInput), (itemToAddInput)); //Don't add parseInt() to itemToAdd
    }

    const updatedStringifiedArr = JSON.stringify(arr);
    updatedArrayEl.textContent = updatedStringifiedArr;


    // Clear input fields after the operation
    inputOne.value = "";
    deleteCountInputElement.value = 0; //updated
    itemToAddInputElement.value = ""; //updated
}