let {firstName,...rest} ={
    firstName: "John",
    lastName: "Doe",
    age: 25,
    city: "New York",
    country: "USA"
};
console.log(firstName);
console.log(rest);