let a = 9;
let b = 20;
let operation = "add";
switch (operation){
    case"add":
        console.log(a+b);
        break;
    case"sub":
        console.log(a-b);
        break;
    case"mul":
        console.log(a*b);
        break;
    case"div":
        console.log(a/b);
        break;
    default:
        console.log("Invalid operation");
        break;
}