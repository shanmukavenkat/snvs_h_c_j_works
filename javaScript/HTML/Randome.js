let festivals = ["Christmas", "New Year"];
function greeting(festival) {
    return "Happy " + festival;
}
for (let item of festivals) {
    console.log(greeting(item));
}
////////////////////////////////////////////////////////////////////////
let bioData = {
    name: "Abhi Ram",
    age: 24
};
let { fullName } = bioData;
console.log(fullName);
