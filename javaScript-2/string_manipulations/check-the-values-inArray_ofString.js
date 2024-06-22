let myArray = [ 'frozen', 'rock', 'stained', 'basket' ];
let value = myArray.every(function(value){
    return "string" === typeof(value);
})
console.log(value);