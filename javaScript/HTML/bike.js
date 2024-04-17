let searchInput = document.getElementById("searchInput");
let stackContainer = document.getElementById("searchResults");

function displayResults(data) {
    let card = document.createElement("div");
    card.classList.add("card");

    let name = document.createElement("p");
    name.textContent = `Name: ${data.name}`;

    let city = document.createElement("p");
    city.textContent = `City: ${data.city}`;

    card.appendChild(name);
    card.appendChild(city);

    stackContainer.appendChild(card);
}

searchInput.addEventListener("keydown", function () {
    let url = "https://apis.ccbp.in/city-bikes?bike_name=" + searchInput.value;

    let options = {
        method: "GET",
    };

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData);
            stackContainer.innerHTML = "";
            // Clear previous results
            searchInput.textContent = "";
            if (jsonData.length > 0) {
                jsonData.forEach(function(obj) {
                    displayResults(obj);
                });
            }
        });
});
