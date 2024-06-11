const newURLOne = "https://apis.ccbp.in/jokes/random";
const newObjectOne = fetch(newURLOne);
newObjectOne
.then((response)=>{
   return response.json();
})
.then((data)=>{
    console.log(data);
})

.catch((error)=>{
    console.log(error);

});