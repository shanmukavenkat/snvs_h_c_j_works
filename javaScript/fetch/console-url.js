let options = {
    method: 'GET',
}

let url = "https://gorest.co.in/public-api/users"
fetch(url, options)
.then(function (response) {
    return response.url;
})
.then(function(url){
    console.log(url);
})