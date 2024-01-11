// Assuming arrayOfPersons is an array of objects with 'age' property
var arrayOfPersons = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 22 }
];

// Iterate over the array and print the 'name' property for members with age > 18
for (let person of arrayOfPersons) {
    let personAge = person.age;
    if (personAge > 18) {
        let personName = person.name;
        console.log(personName);
    }
}
