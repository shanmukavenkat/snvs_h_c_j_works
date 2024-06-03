function numbers(...args){
    console.log(args);
}
numbers(1,2,3,4,5,6,7,8,9,10);
// Here, the spread operator is used to spread the arguments into the numbers function. So, the output will be [1,2,3,4,5,6,7,8,9,10]
console.log("Here we have used the rest operator");
console.log("REST parameter should be the last parameter");
function numbers2(a,b,c,...rest){
    console.log(a);
    console.log(b);
    console.log(rest);
}
numbers2(1,2,3,4,5,6,7);

