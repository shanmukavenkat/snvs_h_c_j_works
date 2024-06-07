let cars = ["Audi", "BMW", "Mercedes"];
let car = {
    color:"Blue",
    brand:"Audi",
    start:function(){
        let audiIndex = cars.findIndex(
            (car) => console.log(this)
        );
    }
};
car.start();
