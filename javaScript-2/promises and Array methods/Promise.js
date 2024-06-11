//when we print the
const newURL = "https://apis.ccbp.in/jokes/random";
let newObject =  fetch(newURL);
console.log(newObject);
//Output: Promise {<pending>}
//Promise is a way to handle
//asynchronous operations in JavaScript
//A promise is an object that
// represents a result of the operation
// that will be returned at some point in the future
// A Promise will be in any one of the three states:
//1. Pending:Neither fulfilled nor rejected
//2. Fulfilled: Operation completed successfully
//3. Rejected: Operation failed
const newURLOne = "https://apis.ccbp.in/jokes/random";
const newObjectOne = fetch(newURLOne);
newObjectOne.then((response)=>{
    console.log(response);
});
newObjectOne.catch((error)=>{
    console.log(error);
});
con