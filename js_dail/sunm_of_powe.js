function number(num) {
    let numArray = num.split(''); // Split the string into an array of characters
    for (let char of numArray) { // Iterate over the array
        if (char.length === 1) { // Check if the length of the character is 1 (it always will be, but this demonstrates the intent)
            console.log(char); // Print the character
        }
    }
}
