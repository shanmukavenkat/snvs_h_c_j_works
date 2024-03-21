//Get -->read
//Post -->Create
//Put -->Update
//Delete -->Delete

//Fetch API
//fetch(url,options)


let options = {
    method:"GET"
}
fetch("https://gorest.co.in/public-api/users",options)
    .then(function(response){
        let newDataEl = document.getElementById("newData");
        newDataEl.textContent = response.status;
        return response.status;


    })
    .then(function(status){
        console.log(status);
    })


