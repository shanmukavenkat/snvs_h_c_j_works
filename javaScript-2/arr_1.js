let arr1 = [2,3];
let arr2 = [4,5,...arr1,6,7];
console.log(arr2);
// spread operator is used to spread the elements of arr1 into arr2. So, the output will be [4,5,2,3,6,7]
let arr3 = [...arr1,...arr2];
console.log(arr3);
console.log("Here we have used the spread operator" );