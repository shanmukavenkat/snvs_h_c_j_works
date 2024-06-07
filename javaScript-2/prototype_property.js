//Prototype property will be shared
//across all the instances
//of its constructor function.
console.log(Array.prototype);

let myArray = new Array(1,2,3,4,5);
console.log(Object.getPrototypeOf(myArray)); // Array.prototype

//=======================================================================
