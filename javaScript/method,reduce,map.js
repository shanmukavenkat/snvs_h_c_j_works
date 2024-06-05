let numbers = [42,52,45,55,64,24,67,78,84,90];
let newOnw = numbers.filter((number) => number%2 === 0)
.map(number => number*2)
    .reduce((a,b)=> a+b);
console.log(newOnw);

