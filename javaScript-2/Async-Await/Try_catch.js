const url = "https://apis.ccbp.in/jokes/random";

const myPromise = async () => {
    try{
    const response =  await fetch(url);
    const jsonData = await response.json();
    console.log(jsonData);
    }
    catch(error){
        console.log(error);
    }
}
const newPromise = myPromise();
console.log(newPromise);
