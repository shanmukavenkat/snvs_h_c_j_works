//The constructor method
// a special method of a class
// for creating and initializing
// an object of that class.


class MyClass {
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    displayFullName(){
        return this.firstname + " " + this.lastname;

    }

}

let Person1 = new MyClass("snvs","komal");
let Person2 = new MyClass("Jane","Doe");


console.log(typeof(MyClass));
console.log(Person1);
console.log(Person1.displayFullName());
console.log(Person2);
console.log(Person2.displayFullName());
console.log(MyClass.prototype);
console.log(Object.getPrototypeOf(Person1) === MyClass.prototype);