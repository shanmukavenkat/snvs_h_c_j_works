function Car(color,brand){
    this.color = color;
    this.brand = brand;
    this.start = ()=>{//car
        console.log(this);//here starting this is defined as the car
    }
};
let car1 = new Car("Blue","BMW");
car1.start();
//Arrow function inherits this from the context in which the code is defined