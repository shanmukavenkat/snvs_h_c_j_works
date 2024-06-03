let sum = (a, b) => {
    return a + b;
}
console.log(sum(10, 20));
console.log("Arrow function with single line statement");
let sum2 = (a,b) => a+b;
console.log("here we can remove the return keyword and curly braces if we have only one line statement in the function body.");
console.log(sum2(10,20));

let isEven = (num) => num%2 === 0;
console.log(isEven(10));
console.log(isEven(11));