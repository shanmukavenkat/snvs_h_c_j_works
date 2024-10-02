function outer(){
    var value  = 'Hello';
    console.log('outer Function executed')
    function inner(){
        console.log(value);
    }
    return inner
}
outer()
let func = outer();
console.log(func)
console.log(func());