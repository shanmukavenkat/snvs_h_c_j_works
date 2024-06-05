let car = {
    color:"Blue",
    brand:"BMW",
    start:function(){////method
        console.log(this);
        setTimeout( ()=>{
            console.log(this);
        },1000);
    }
};
car.start();