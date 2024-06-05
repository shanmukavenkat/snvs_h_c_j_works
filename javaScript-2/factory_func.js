function createCar(color,brand){
    return{
       color,
       brand,
    start(){
        console.log("Car started");
    }
    }
}
let car1=createCar("blue","BMW");
console.log(car1);
car1.start();
let car2=createCar("red","Toyota");
console.log(car2);
car2.start();