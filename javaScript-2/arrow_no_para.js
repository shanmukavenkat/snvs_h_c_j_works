let sayHi = () => "Hello";
console.log(sayHi());
//returning object
console.log("Returning object");
let createPerson = name =>{

    return {
        name: name
    }

};
console.log(createPerson("John"));
let person = nameE => ({name: nameE});
console.log(person("John"));
