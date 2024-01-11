// Assuming arrayOfPersons is an array of objects with 'age' property
var arrayOfPersons = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 22 }
];

// Iterate over the array and print the 'name' property for members with age > 18
for (let newPerson of arrayOfPersons) {
    let personAge = newPerson.age;
    if (personAge > 18) {
        let personName = newPerson.name;
        console.log(personName);
    }
}
