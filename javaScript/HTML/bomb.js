let timerElement= document.getElementById('timer');

let countDown = 10;

let intervalId = setInterval(function(){
    countDown = countDown - 1;
    timerElement.textContent = countDown;
    if(countDown === 5){
        timerElement.style.color = 'red';
    }
    if(countDown === 0) {
        timerElement.textContent = 'BOOM!!';
        clearInterval(intervalId);
    }
},1000);

let defuserElement = document.getElementById('defuser');
    defuserElement.addEventListener("keydown",function(event){
        let defuserCode = defuserElement.value;
        if(event.key === "Enter" && defuserCode === "defuse" && countDown > 0 )
        {
            clearInterval(intervalId);
            timerElement.textContent = 'Bomb Defused';
            timerElement.style.color = 'green';
        }
    });
