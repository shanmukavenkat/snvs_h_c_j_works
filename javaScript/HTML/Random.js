let buttonEle = document.getElementById("getActivityBtn");
let imgSrc = document.getElementById("activityImg");
let textOne = document.getElementById("activityName");
let textTwo = document.getElementById("activityType");
let spinnerEle = document.getElementById("spinner");

function displayResult(data) {
    spinnerEle.classList.add("d-none"); // Show spinner when making the API call

    textOne.textContent = data.activity;
    // You can assign any image source you want for the activity
    imgSrc.src = data.image; // Update with actual image source
    textTwo.textContent = data.type; // Assuming 'type' is a property of the returned object
}

buttonEle.addEventListener("click", function() {
    spinnerEle.classList.remove("d-none"); // Show spinner when making the API call

    let options = {
        method: "GET"
    };
    fetch("https://apis.ccbp.in/random-activity", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData);
            displayResult(jsonData);
        });
});