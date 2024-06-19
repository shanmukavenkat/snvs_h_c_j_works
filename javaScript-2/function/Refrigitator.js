function Refrigerator(model, price) {
    this.model = model;
    this.price = price;
    this.getModel = function() {
        console.log(this.model);
    };
    this.getPrice = () => {
        console.log(this.price);
    };
}

let refrigerator1 = new Refrigerator("LG 679", 79990);

refrigerator1.getModel();
refrigerator1.getPrice();