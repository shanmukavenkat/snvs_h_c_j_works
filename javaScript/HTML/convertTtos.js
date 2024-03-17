let hoursInput = document.getElementById("hoursInput");
let minuInput = document.getElementById("minutesInput");
let declareMsg = document.getElementById("errorMsg");
let dispMsg = document.getElementById("timeInSeconds");
let buttonElement = document.getElementById("convertBtn");
let buttonElement2 = document.getElementById("convertBtn2");

buttonElement.addEventListener("click",function(){

    if (hoursInput.value === "" ){
        declareMsg.textContent = "Please Enter Valid Number of Hours";

    } else if (minuInput.value === ""){
        declareMsg.textContent = "Please Enter Valid Number of Minutes";

    } else {
        let number = parseInt(hoursInput.value)*3600 + parseInt(minuInput.value)*60;
        dispMsg.textContent = number +"s";
    }
});


buttonElement2.addEventListener("click" ,function(){
    hoursInput.value = "";
    minuInput.value = "";
    dispMsg.textContent = "";
});