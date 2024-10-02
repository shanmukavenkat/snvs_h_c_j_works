///call

var obj = {name:"Piyush"}

function sayHello(age,professor){
    return "Hello " +this.name+"is "+age + "frontend Developer" + professor;
}

console.log(sayHello.call(obj,24))

// the call which takes the object to be used as a
//current object and the list of arguments
// to be passed as a methods

console.log(sayHello.apply(obj,[24," softwareEngineer"]))
//the apply which takes the
///The apply() method calls the specified function with
// a given this value, and arguments provided as an array

const  bindFun = sayHello.bind(obj);

console.log(bindFun(42," software Developer"));
console.log(bindFun(43," new generative ai"));