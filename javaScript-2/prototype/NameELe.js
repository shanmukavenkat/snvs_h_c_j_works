class NameELe{
    constructor(name,age,number,place) {
        this.name = name;
        this.age = age;
        this.number = number;
        this.place = place;
    }
}

NameELe.prototype.newName = function(){
    return this.name + " is a new name";
}




const name = new NameELe("John", 25, 1234567890, "New York");
console.log(name.newName());
console.log(name.age);
console.log(name.number);
console.log(name.place);
