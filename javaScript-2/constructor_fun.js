function NewCar(color,brand){
    this.color = color;
    this.brand = brand;
    this.start = function(){
        console.log("Car started");
    }
}
let Car1 = new NewCar("blue","BMW");
// car1 is instance of NewCar
//car1.start() is instance method
//car1.color,cart1.brand are instance properties
console.log(Car1);
let Car2 = new NewCar("red","Toyota");
console.log(Car2);
let Car3 = new NewCar("green","Ford");
console.log(Car3);
