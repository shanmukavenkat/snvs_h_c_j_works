function multiply(inputArray) {
    let newArray = inputArray.map((subArray) => {
        if (subArray.some(item => item % 2 === 0)) {
            return subArray.reduce((acc, current) => acc * current, 1);
        } else {
            return 0;
        }
    });
    console.log(newArray);
}

// Sample input
let inputArray = [ [ 12, 1, 2, 4, 1 ], [ 18, 20, 30, 45 ], [ 49, 11, 13, 21 ] ];

// Function call
multiply(inputArray);
