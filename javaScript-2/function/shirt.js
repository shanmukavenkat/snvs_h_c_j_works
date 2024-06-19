const shirt = {
    color: "blue",
    price: 400,
    getPrice: function() {
        console.log(this.price);
    }
};

const newShirt = shirt;
newShirt.price = 700;

shirt.getPrice();
newShirt.getPrice();
