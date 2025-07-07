//question

const arr = [2,4,3,5,36,7,4]
const mapResult = arr.map((ar)=>{
    return ar+2
})
console.log(mapResult)
// the map method will return a new array with the results of calling a provided function on every element in the calling array.


arr.forEach((ar, i) => {
    arr[i] = ar + 2;  // Modifies the original array
});

console.log(arr);

const numbers = [1, 2, 3, 4, 5, 6];

// Double each number, filter out odd numbers, then sum the result
const result = numbers
    .map(num => num * 2)        // [2, 4, 6, 8, 10, 12]
    .filter(num => num % 2 === 0) // Keeps even numbers (all are even)
    .reduce((sum, num) => sum + num, 0); // Sums: 2 + 4 + 6 + 8 + 10 + 12 = 42

console.log(result); // Output: 42
//===========================================================================

console.log(typeof(null)) //object the null is a actual value
console.log(typeof(undefined))  //undefined

console.log(null == undefined) //true verify's with out matching the type
console.log(null === undefined) //false verify's with matching the type

//===========================================================================


//document.querySelector('#products').addEventListener('click',(event) =>{
//    console.log(event.target)
//    event.target.style.color = 'red'
//    event.target.style.fontSize = '20px'
//
//});

// The event.target property returns the element that triggered the event.
// The tagName property returns the tag name of the element that triggered the event.
// flatten this array
let array = [
    [1, 2],
    [3,[7,8], 4],
    [5, 6],
];
let flattenArray = [].concat(...array);
console.log(flattenArray); // Output: [1, 2, 3, 4, 5, 6]
console.log(flattenArray.flat(Infinity))

// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// The depth parameter is optional. It is a number that specifies how deep a nested array structure should be flattened. The default is 1.
// If you pass Infinity as the depth, the method will flatten the entire array.


{
    var a ="one";
}
console.log(a)
///var
{
const  newone = "two";
console.log(newone)
}
//console.log(newone)
///const

{
    let theone = "three";
    console.log(theone)
}
//console.log(theone)

// while in the declaration we can declare the var outside the block and can access it outside the block
// while in the const and let we can't access the variable outside the block
// we can declare the var and we can access redeclare the var and gives the output
// we can't redeclare the const and let it gives the error
// the let can be re-initalized but the const can't be reinitialized


function  na(){
    for (var i = 0; i < 5; i++){
        setTimeout(function log(){
            console.log(i);
        }, i*1000);
}}

na()