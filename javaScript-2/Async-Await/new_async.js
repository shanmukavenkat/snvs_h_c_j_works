let url = "https://apis.ccbp.in/jokes/random";

const myPromise = async() =>{
    const promiseObj1 = fetch(url);

    const response1 = await promiseObj1;
    const jsonData = await response1.json();
    console.log(jsonData);
    const promiseObj2 = fetch(url);
    const response2 = await promiseObj2;
}

myPromise();