function Car(color,brand){
    this.color = color;
    this.brand = brand;
    this.start = function(){
        console.log("Car started");
    }
}
let car1 = new Car("blue","BMW");
console.log(Car.name);
//returns the function name
console.log(Car.length);
//returns the number of parameters
console.log(typeof(Car));
//returns the type of the function
console.log(car1.constructor);
//returns the constructor function that created the object