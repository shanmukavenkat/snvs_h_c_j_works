let quotesText = document.getElementById("quoteDisplay");
let countEle = document.getElementById("timer");
let buttonEle = document.getElementById("submitBtn");
let buttonTwo = document.getElementById("resetBtn");
let textInput = document.getElementById("quoteInput");
let resultValue = document.getElementById("result");
let spinnerEle = document.getElementById("spinner");


//timer
let countDown = 0;
let uniqueId = setInterval(function() {
    countDown = countDown + 1;
    countEle.textContent = countDown;
}, 1000);


spinnerEle.classList.remove("d-none");

//quote method
let options = {
    method: "GET"
};
let url = "https://apis.ccbp.in/random-quote";

fetch(url, options)
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {
        let obj = JSON.parse(data);
        quotesText.textContent = obj.content;

        spinnerEle.classList.add("d-none");

        //accessing the outside the function
        let quotesTextValue = quotesText.textContent.trim();
        console.log("Quote text:", quotesTextValue);

    });

///textcheck

buttonEle.addEventListener("click", function() {
    /// the para quotes got created
    let textInputValue = textInput.value.trim();
    let quotesTextValue = quotesText.textContent.trim();

    if (textInputValue === quotesTextValue) {
        clearInterval(uniqueId);
        resultValue.textContent = "you typed in " + countDown + " seconds";
    } else {
        resultValue.textContent = "You typed incorrect sentence";
    }

});

buttonTwo.addEventListener("click", function() {
    resultValue.textContent = " ";
    textInput.value = " ";
    clearInterval(uniqueId);
    countDown = 0;
    countEle.textContent = countDown;
    countDown.textContent = 0;
});