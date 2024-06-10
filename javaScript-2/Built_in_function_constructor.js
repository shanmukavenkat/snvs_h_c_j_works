let Car = new Function(
    "color,brand",
    `this.color = color;
    this.brand = brand;
    this.start = function(){
        console.log("Driving");
    };`
);
console.log(Car.prototype);//
console.log("Above is the old way of creating a constructor function");
function WeCar(color,brand){
    this.color = color;
    this.brand = brand;
    this.start = function(){
        console.log("Driving");
    };
}
console.log(Car.prototype);//
console.log("Above is the new way of creating a constructor function");
console.log(Object.getPrototypeOf(Car));

let car1 = new Car("red","Toyota");
let car2 = new Car("blue","Honda");
console.log(car1);
console.log(car1.prototype);//constructor :f(color,brand)
console.log(Object.getPrototypeOf(car1));
console.log(car2);
///to know instance properties attributes
console.log("To know instance properties attributes");
console.log(Object.getOwnPropertyNames(car1));
console.log(Object.getOwnPropertyNames(car2));
console.log("ProOtotype inheritance");