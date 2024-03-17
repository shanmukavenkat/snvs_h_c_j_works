let options = {
    method:"GET"
}

let url = "https://gorest.co.in/public-api/users";

fetch(url,options)
 .then(function(response){
     return response.status;
})
.then(function(status){
    console.log(status);
});
///headers
fetch(url,options)
 .then(function(response){
     return response.headers;
})
.then(function(headers){
    console.log(headers);
});