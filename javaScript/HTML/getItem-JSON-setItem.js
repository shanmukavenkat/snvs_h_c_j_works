let person ={
    name : "snvskomal",
    age: 20,
    country: "India",
}
let stringified_Profile = JSON.stringify(person);
localStorage.setItem("profileDetails", stringified_Profile);
let stringifiedLocalProfile = localStorage.getItem("profileDetails");
let parsedProfile = JSON.parse(stringifiedLocalProfile);

console.log(parsedProfile);
console.log(typeof(parsedProfile));