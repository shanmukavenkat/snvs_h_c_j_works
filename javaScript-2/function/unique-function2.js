const myPromise = new Promise((resolve, reject) => {
    console.log("Blue");
});

console.log("Green");

myPromise
    .then(() => {
        console.log("Orange");
    });
//here the output will print late because the promise is not resolved yet and the then block is not executed

console.log("White");
