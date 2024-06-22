let array = [49,11,39,21];

function multiply(array) {
    return array.reduce((acc, item) => acc * item);
    }
console.log(multiply(array));