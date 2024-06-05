function camelCar(color,brand){
    return{
        color:color,
        brand:brand,
        start:function(){
            console.log("Car started");
        }
    }
}

let car1=camelCar("blue","BMW");
let car2=camelCar("red","Toyota");
let car3 = camelCar("green","Ford");

console.log(car1);
car1.start();
console.log(car2);
car2.start();
console.log(car3);
car3.start();

