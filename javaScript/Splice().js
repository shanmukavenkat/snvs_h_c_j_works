//the splice() method is a array method
///the method changes the contents of an array
//using splice()
//--remove existing items
//--replace existing items
//--add new items
//syntax
//------>arr.splice(start,DeleteCount)<------
let myArray = [1,"six","snvskomal","9.8"];
let removed = myArray.splice(2,1);
let removed1 = myArray.splice(2,2);
let removed2 = myArray.splice(2,0);
console.log(myArray);
console.log(myArray);
console.log(myArray);
//deleted items
console.log(removed);
console.log(removed1);
console.log(removed2);
//add new items
//////////////////////////////////////////////////////////////////////////////////////////////
let myArray1 = [1,"six","snvskomal","9.8"];
let toAdd = myArray1.splice(2,0,"new","new1");
console.log(myArray1);
console.log(toAdd);
//replace existing items
//////////////////////////////////////////////////////////////////////////////////////////////
let myArray2 = [1,"six","snvskomal","9.8"];
let toReplace = myArray2.splice(2,1,"new","new1");
console.log(myArray2);
console.log(toReplace);