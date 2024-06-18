//Average of values at even indices of the Array
// Sample Input
let integers = [12, 2, 2, 4, 1]; // You can change this input to test with different arrays

let sum = 0;
let count = 0;

// Iterate over the array using forEach
integers.forEach((value, index) => {
    if (index % 2 === 0) { // Check if the index is even
        sum += value; // Add the value to the sum
        count++; // Increment the count
    }
});

// Calculate the average
let average = sum / count;

console.log(average); // Output the average
