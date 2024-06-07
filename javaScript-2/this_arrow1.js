console.log( this );//window object
let car = {
    color:"Blue",
    brand:"BMW",
    start:() =>{////method
        console.log(this);
    }

};
car.start();///output window object
