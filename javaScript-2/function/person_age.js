function Person(firstName, age) {
    this.firstName = firstName;
    this.age = age;
    this.getAge = function() {
        setTimeout(function() {
            console.log(this);
        }, 1000);
    };
}

let person = new Person("Pruthvi", 30);
person.getAge();
