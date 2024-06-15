const userInput =9372;
const correctPin = 9372;

let promise = new Promise((resolve,reject)=>{
    let queryLe = userInput === correctPin ?resolve("Success") : reject("Please enter valid pin")

});
promise.then((fromResolve) =>{
    console.log(fromResolve)  ;
}).catch((fromReject) =>{
    console.log(fromReject);
});
