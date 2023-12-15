let inputElement = document.getElementById("inputElement");
let signElement = document.getElementById("signText");


function signIn(){
    let inputValue = inputElement.value;
    let outputVale = "Hi" + inputValue+ "your login is processing";
    signElement.textContent = outputVale;
}