//arr.findIndex(testingFunction)

let myArray = [5,21,32,54,76,789,12,43];
let ItemIndex = myArray.findIndex(function(eachItem){

    console.log("EachItem "+eachItem);
});
console.log("---------------------------------------------------------------------");
let myArray1 = [5,21,32,54,76,789,12,43];
let ItemIndex1 = myArray1.findIndex(function(eachItem1){
    if(eachItem1 === 789){
        return true;
    }else{
        return false;
    }
});
console.log("ItemIndex1 "+ItemIndex1);  // Output: 5
console.log("---------------------------------------------------------------------");

let customerData = [
    {name: 'John', age: 25},
    {name: 'Smith', age: 30},
    {name: 'Sam', age: 35},
    {name: 'Tom', age: 40}
];
 let dataNum=customerData.findIndex(function(eachItem3){
    if(eachItem3.age === 35){
        return true;
    }else{
        return false;
    }
 });
 console.log(dataNum);
