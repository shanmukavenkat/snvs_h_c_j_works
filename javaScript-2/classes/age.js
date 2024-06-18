let person = {
    name: "John",
    age: "25",
    birthday: "22 Feb 1995",
    getAge: () => {
        console.log(this.age);
    }
};

person.getAge();
