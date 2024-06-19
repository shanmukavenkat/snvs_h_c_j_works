const myPromise = (isResolved) => {
    return new Promise(function (success, failed) {
        isResolved ? success("Success") : failed("Error");
    });
};

myPromise(false)
    .then(() => {
        console.log("Resolved");
    })
    .then(() => {
        console.log("Resolved");
    })
    .then(() => {
        console.log("Resolved");
    })
    .catch((error) => {
        console.log(error);
    });