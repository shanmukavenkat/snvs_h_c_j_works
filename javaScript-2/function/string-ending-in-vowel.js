const inputString = "Five";
const vowels = ['A', 'E', 'I', 'O', 'U'];

let finalOutput = false;

for(let letters of vowels){
    const result = inputString.toUpperCase().endsWith(letters);
    if(result){
        finalOutput = true;
        break;
    }
}



console.log(finalOutput);