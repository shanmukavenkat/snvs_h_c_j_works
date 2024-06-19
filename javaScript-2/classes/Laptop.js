class Laptop {
    constructor(brand, cost) {
        this.brand = brand;
        this.cost = cost;
    }
    getBrand() {
        console.log(this.brand);
    }
}

let laptop = new Laptop("Dell", 65000);
console.log(typeof(laptop.cost));
