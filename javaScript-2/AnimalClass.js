class AnimalClass{
    constructor(name){
        this.name = name;
    }
    eat(){
        return `${this.name}` + " is eating";
    }
    MakeSound(){
        return `${this.name}`+" is making sound";
    }
}

class Dog extends AnimalClass{
    constructor(name,breed){
        super(name);
        this.breed = breed;

    }
    sniff(){
        console.log(this);
        return `${this.name}` + " is sniffing";

}
}

class Cat extends AnimalClass{
    constructor(name,newBreed){
        super(name);
        this.newBreed = newBreed;

    }
    Purr(){
        console.log(this);
        return `${this.name}` + " is purring" ;


    }
}
let newDog = new Dog("SomeDog","GermanShepard");
console.log(newDog);
console.log(newDog.sniff());
console.log(newDog.eat());
console.log(newDog.MakeSound());
console.log("===========AnotherClass==========")
let newCat = new Cat("SomeCat","BritishShortHair");
console.log(newCat);
console.log(newCat.Purr());
console.log(newCat.eat());
console.log(newCat.MakeSound());


console.log("+++>this<+++ in the class ");


