function  displayGreeting(displayName){
    console.log("hello");
    displayName();
    console.log("GoodMorning");

}
let displayRam = function(){
    console.log("Ram");
}
displayGreeting(displayRam);