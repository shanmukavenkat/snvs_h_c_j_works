//if a variable is declared
//outside all the functions and curly braces
//it is called as global scope
let x = 30;
function Foo(){
    if(x>18){
        console.log(x);
    }
}
Foo();