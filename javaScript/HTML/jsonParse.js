///here we are going to parse the JSON string to JSON object
let parsedProfile = '{"name":"snvskomal","age":20,"country":"India","hobbies":["reading","coding","listening to music"]}';
let stringParsedProfile = JSON.parse(parsedProfile);
console.log(stringParsedProfile);
console.log(typeof(stringParsedProfile));