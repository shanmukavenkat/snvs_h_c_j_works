console.log( this );//window object
let car = {
    color:"Blue",
    brand:"BMW",
    start:() =>{////method
        console.log(this);
    }//first priority is given to the arrow function

};
car.start();
