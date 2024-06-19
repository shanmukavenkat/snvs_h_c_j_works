let bus = {
    capacity: 50,
    speed: "80 km/h",
    start: () => {
        return this;
    }
};

console.log(bus);
console .log(bus.start());
if (bus.start() === bus) {
    console.log("this refers to the bus object");
} else {
    console.log("this refers to the window object");
}
