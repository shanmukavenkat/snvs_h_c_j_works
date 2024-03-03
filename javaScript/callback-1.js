function  displayGreeting(displayName){
    console.log("hello");
    displayName();
    console.log("GoodMorning");

}
function displayRahul(){
    console.log("Rahul");
}

displayGreeting(displayRahul);

//displayGreeting(function(){
  //  console.log("Sachin");
//});


