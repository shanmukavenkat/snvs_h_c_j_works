let uniqueString = "Was it a cat I saw?";
let result = uniqueString
    .split('') // Convert the string to an array of characters
    .filter((item, index, array) => array.indexOf(item) === index) // Filter out duplicate characters; // Join the array back into a string
console.log(result);