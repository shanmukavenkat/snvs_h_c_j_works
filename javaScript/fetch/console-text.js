let options = {
    method:"GET"
}
let url = "https://gorest.co.in/public-api/users";
fetch(url, options)
.then(function(response){
    return response.text();
})
.then(function(text){
    console.log(text);
})