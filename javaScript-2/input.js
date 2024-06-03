let a = 10;

function number(a) {
    function increment(a) {
        return a + 1;
    }

    function decrement(a) {
        return a - 1;
    }

    function reset(a) {
        return a;
    }

    // Store results in an array
    const results = [];
    results.push(increment(a));
    results.push(decrement(a));
    results.push(reset(a));

    return results;
}

// Example usage
console.log(number(a));
