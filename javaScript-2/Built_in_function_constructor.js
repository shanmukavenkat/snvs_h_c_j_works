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
function Car(color,brand){
    this.color = color;
    this.brand = brand;
    this.start = function(){
        console.log("Driving");
    };
}
console.log(Car.prototype);//
console.log("Above is the new way of creating a constructor function");