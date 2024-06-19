const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 1000);
})
    .then((response) => console.log("Response 1"))
    .catch((error) => console.log(error))
    .then((response) => console.log("Response 2"));
