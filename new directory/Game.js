let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random()*100);
console.log(randomNumber);

function checkGuess() {
    let userGuess = parseInt(userInput.value);
    if (userGuess > randomNumber){
        gameResult.textContent = "your guess is too high try again";
        gameResult.style.backgroundcolor="#1e271c";
    }
    else if (userGuess < randomNumber){
        gameResult.textcontent="your guess is too low try again";
        gameResult.style.backgroundcolor="#00ff34";

    }
    else if (userGuess === randomNumber){
        gameResult.textcontent="your guess is correct you win";
        gameResult.style.backgroundcolor="#fff900";

    }
    else {
        gameResult.textcontent="please enter the correct number";
        gameResult.style.backgroundcolor="#ff0000";
    }



}