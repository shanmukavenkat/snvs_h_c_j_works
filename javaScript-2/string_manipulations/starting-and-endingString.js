let input= ['teacher', 'friend', 'cricket', 'farmer', 'rose', 'talent', 'trainer'];
let fisrtWord = "t";
let secondWord = "r";

let result = input.filter((item) => item.startsWith(fisrtWord) || item.endsWith(secondWord));
console.log(result);