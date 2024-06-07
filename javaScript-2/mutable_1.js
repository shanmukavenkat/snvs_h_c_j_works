let x = {value:5};
let y = x;
let z = {value:20};
y.value = 10;
console.log(x);
console.log(y);
y = z;
console.log(x);
console.log(y);
