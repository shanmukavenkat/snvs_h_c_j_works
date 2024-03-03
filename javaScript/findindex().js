let myArray  = [5,"six",2,8.2];
let itemsIndex = myArray.findIndex(function(eachItem){
    console.log(eachItem);
});
///////////////////////////////
let myArray1  = [5,"six",2,8.2];///add 130 in myArray1
let itemsIndex1 = myArray1.findIndex(function(eachItem1){
    if(eachItem1 === 130){
        return true;
    }else{
        return false;
    }

});
//output is -1

console.log(itemsIndex1);
////
let customerData =[
    {
        name:"ravi",
        id :101
    }
    ,{
        name:"ramu",
        id :102
    }
    ,{
        name:"rahul",
        id :103
    }

];

let itemsIndex3 = customerData.findIndex(function(eachItem3){
    if(eachItem3.id === 102){
        return true;
    }else{
        return false;

}});
    console.log("the index is "+itemsIndex3);