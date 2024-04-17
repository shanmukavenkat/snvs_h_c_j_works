let formEle = document.getElementById("questionsForm");
let cityA = document.getElementById("cityHyderabad");
let cityB = document.getElementById("cityChennai");
let cityC = document.getElementById("cityDelhi");
let cityD = document.getElementById("cityMumbai");
let paraEle = document.getElementById("resultMsg");

let selectedCity = null;

// Event listeners added after element retrieval
cityA.addEventListener("change", function() {
    selectedCity = event.target.value;
    console.log(selectedCity);
});
cityB.addEventListener("change", function() {
    selectedCity = event.target.value;
    console.log(selectedCity);
});
cityC.addEventListener("change", function() {
    selectedCity = event.target.value;
    console.log(selectedCity);
});
cityD.addEventListener("change", function() {
    selectedCity = event.target.value;
    console.log(selectedCity);
});

formEle.addEventListener("submit", function(event) {
    event.preventDefault();
    if (selectedCity === null) {
        paraEle.textContent = "Please Select Answer";
        paraEle.style.color = "red";
    } else if (selectedCity === "city3") {
        paraEle.textContent = "Correct Answer!";
        paraEle.style.color = "green";
    } else if (selectedCity === "city1" || selectedCity === "city2" || selectedCity === "city4") {
        paraEle.textContent = "Wrong Answer!";
        paraEle.style.color = "red";
    }
});