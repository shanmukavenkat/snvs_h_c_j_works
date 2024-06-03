let person = {name:"snvskomal", age: 21};
let person2 ={...person,city:"Hyderabad"};
console.log(person2);
// Here, the spread operator is used to spread the properties of person object into person2 object. So, the output will be {name: "snvskomal", age: 21, city: "Hyderabad"}
let person3 = {pincode:500001,...person, ...person2, country:"India"};
console.log(person3);
