
function rotateArray(arr, k) {
   console.log('Original Array:', arr);
   console.log('Rotation:', k);
   let resultAr = arr.slice(-k)
    let result1 = arr.slice(0, -k);
    resultAr = resultAr.concat(result1);
    console.log('Rotated Array:', resultAr);


}

const a = [1, 2, 3, 4, 5, 6, 7];
const k = 2;
rotateArray(a, k);

