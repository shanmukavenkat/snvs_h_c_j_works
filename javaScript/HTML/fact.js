let inputEle = document.getElementById("userInput");
let paraEle = document.getElementById("fact");
let spinnerEle = document.getElementById("spinner");


function searechButton(event) {
    if (event.key === "Enter") {
        spinnerEle.classList.toggle("d-none");
        inputEle.textContent = "";
        let url = "https://apis.ccbp.in/numbers-fact?number=" + inputEle.value;

        let options = {
            method: "GET"
        };

        fetch(url, options)
            .then(function(response) {
                return response.text();
            })
            .then(function(data) {
                spinnerEle.classList.toggle("d-none");
                let obj = JSON.parse(data);
                paraEle.textContent = obj.fact;
            });
    }

}

inputEle.addEventListener("keydown", searechButton);