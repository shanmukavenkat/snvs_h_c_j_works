const myPromise = () => {
    return new Promise(function (reject, resolve) {
        reject();
    });
};

myPromise()
    .then(() => {
        console.log("Call back function name need not be resolve");
    })
    .catch((error) => {
        console.log("Call back function name need not be reject");
    });