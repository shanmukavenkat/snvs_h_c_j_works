const phone1 = new Array("5GB RAM", "3100mAh");
const phone2 = new Array("3GB RAM", "4000mAh", "13MP");


console.log(Object.getPrototypeOf(phone1));
console.log(Object.getPrototypeOf(phone2));
console.log(Object.getPrototypeOf(phone1) === Object.getPrototypeOf(phone2));
