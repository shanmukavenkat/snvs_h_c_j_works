const bus = {
    type: "AC semi seater",
    capacity: 52,
    speed: "80 km/hr",
    start() {
        setTimeout(function () {
            console.log(this.speed);
        }, 1000);
    },
};

bus.start();
