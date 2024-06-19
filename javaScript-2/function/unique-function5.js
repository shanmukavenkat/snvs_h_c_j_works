const myPromise = () => {
    return new Promise((resolve) => {
        resolve("I have resolved!");
    });
};

const myAsyncTask = async () => {
    console.log("Before Promise");
    await myPromise();
    console.log("After Promise");
};

myAsyncTask();
