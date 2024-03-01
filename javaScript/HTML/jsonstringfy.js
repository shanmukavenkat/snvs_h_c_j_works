let profile={
    name : "snvskomal",
    age: 20,
    country: "India",
    hobbies: ["reading","coding","listening to music"]
}
console.log(profile);
console.log("---------------------------------------------------------------------");
let stringifiedProfile = JSON.stringify(profile);

console.log(stringifiedProfile);
console.log(typeof(stringifiedProfile));

///here we are converting the object into string using JSON.stringify() method