let paraElement = document.getElementById("jokeText");
let buttonElement = document.getElementById("jokeBtn");
let loading = document.getElementById("spinner");

function buttonClicked() {
    loading.classList.remove("d-none");
    paraElement.classList.add("d-none");
    let options = {
        method: "GET"
    };
    let url = "https://apis.ccbp.in/jokes/random";
    fetch(url, options)
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            loading.classList.add("d-none");
            paraElement.classList.remove("d-none");
            let obj = JSON.parse(data);
            paraElement.textContent = obj["value"];

        });
}
buttonElement.addEventListener("click", buttonClicked);