// Splice method is used to add or remove elements from an array.
let myArray = [5,'six',2,8.5];
newArray = myArray.splice(2,2);
console.log(myArray);  // Output: [5, "six"]
console.log("-----------------------------------------------------")
console.log(newArray);  // Output: []

console.log("-----------------------------------------------------")
//we can also add elements using splice method
let myArray1 = [5,'six',2,8.5,9];
myArray1.splice(2,0,7,'snvskomal');

console.log(myArray1);  // Output: [5, "six", 7, "snvskomal", 2, 8.5, 9]
console.log("-----------------------------------------------------")
//we can  also replace the elements using splice method
let myArray2 = [5,'six',2,8.5,9];
myArray2.splice(0,1,'snvskomal');
console.log(myArray2);  // Output: [5, "six", "snvskomal", 8.5, 9]





