const min = 1
const max = 5
const words = [ 'Koushik', 'Eshwar', 'Sai', 'Vinay' ];

/* Write your code here */
const result = words.every(word => word.length >= min && word.length <= max);
console.log(result);

