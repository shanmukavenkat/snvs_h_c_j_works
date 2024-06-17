const myArray = ["apple", "banana", "cherry", "date"]; // Example array of strings

// Filter the array to get strings with an odd length
let oddNumber = myArray.filter(str => str.length % 2 !== 0);

// Convert the filtered strings to uppercase
let result = oddNumber.map(str => str.toUpperCase());

console.log(result); // Output will be ["APPLE", "BANANA", "CHERRY"]
