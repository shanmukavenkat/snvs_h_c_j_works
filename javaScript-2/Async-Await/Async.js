//the Async and Await is
// a modern way to consume promises

let url = "https://apis.ccbp.in/jokes/random";
const myPromise = async () => {
    const response =  await fetch(url);
    const jsonData = await response.json();
    console.log(jsonData);
}
myPromise();