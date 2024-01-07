let numbers = [1, 2, 3, 4, 5];

// Using reduce to calculate the sum of all numbers in the array
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15
