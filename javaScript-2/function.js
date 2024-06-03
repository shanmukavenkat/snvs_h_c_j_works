function add(a,b,c){
    return a+b+c;
}
let numbers = [1,2,3];
console.log(add(...numbers));
console.log("extra values are ignored with respective function parameters");
console.log(add(1,2,3,4,5,6));

// Here, the spread operator is used to spread the elements of numbers array into the add function. So, the output will be "the addition 6".