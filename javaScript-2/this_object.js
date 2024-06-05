///car is an object and start is a method
let car = {
    color:"Blue",
    brand:"BMW",
    start:function(){////method
        console.log(this);
    }
};


car.start();
//this refers to the object that is executing the current function
