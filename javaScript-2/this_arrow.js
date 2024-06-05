//In the Arrow function,
//this depends on two aspects:
//when the code is defined
// context -->console.log( this );//window object
let car = {//object in this the method is defined
    color:"Blue",//but the method is not executed
    brand:"BMW",
    start:function(){////method
        setTimout(function (){
            console.log("Testing");
        },1000);
    }
};
car.start();
//when we call the start method
//the method is executed giving error
//