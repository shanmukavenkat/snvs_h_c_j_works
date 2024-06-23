function manipulateArray(arr){
    arr.push[5];
    arr = [1];
    return arr;
}

let list = [1,2,3,4];
manipulateArray(list);//here the manipulateArray is not returning anything and
// it not effecting the list array outside the function
console.log(list);

list = manipulateArray(list);
console.log(list);

