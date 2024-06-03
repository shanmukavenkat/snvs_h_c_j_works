function sum(...args){
    let result = 0;
    for(let arg of args){
        result = result+ arg;
    }
    return result;
}
console.log(sum(1,2,3,4,5,6,7,8,9,10));
console.log(sum(1,2,3));