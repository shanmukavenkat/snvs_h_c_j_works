let greet = name => `Hello ${name}`;
console.log(greet("John"));
console.log("==>here we have used the single parameter arrow function to greet the user with the name passed as an argument <==");
let num = number => number%2 === 0;
console.log(num(10));
console.log(num(11));
let square = n => n*n;
console.log(square(10));