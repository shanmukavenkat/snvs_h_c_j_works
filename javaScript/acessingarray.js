//creating objects
let person = {
    name: "snvskomal",
    age: 20,
    isEligible: true,
    city: "Hyderabad"
};
//creating  second object
console.log(person);
let person1={
    name:"komal",
    age:"21",
    "1":"Value1",
    "my Choice":"Value2"
};
console.log(person1);
//accessing object in two ways they are
// . dot notation and [] bracket notation
//these are used for only valid identifier and not used for non-valid identifiers

console.log(person1.age + " <-----Dot notation ");
console.log(person['name'] + " <-----Bracket Notation") ;
//we can use the bracket notation to get the non-valid identifier
console.log(person1[1] +" <------not a valid identifier but accessing using ");
