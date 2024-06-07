function Car(color,brand){
    this.color = color;
    this.brand = brand;
    this.start = function(){//car
        console.log(this);//here starting this is defined as the car
    }
};
let car1 = new Car("Blue","BMW");
car1.start();
//In constructor function, this refers to the instance object