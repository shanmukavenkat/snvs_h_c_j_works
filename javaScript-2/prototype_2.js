function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
//these instance properties are created for each object
Person.prototype.fullName = function(){
    return this.firstName + " " + this.lastName;
}
let person1 = new Person("John", "Doe");
let person2 = new Person("Virat", "Kohli");

//console.log(Object.getPrototypeOf(person1));
//console.log(person2);

console.log(person1.fullName());
console.log(Object.getPrototypeOf(person1) === Object.getPrototypeOf(person2));

console.log(person2.fullName());