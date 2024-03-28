let inputEle = document.getElementById("searchInput");
let resultCont = document.getElementById("resultCountries");
let spinnnerEle = document.getElementById("spinner");













function inputUser(event){
    if(event.key === "Enter"){

        spinnnerEle.classList.toggle("d-none");
        inputEle.textContent = "";

        let options ={
            method:"GET"
        };

        let url = "https://apis.ccbp.in/countries-data/" + inputEle.value;
        fetch(url,options)
            .then(function(response){
                return response.text();
            })
            .then(function(jsonData){
                console.log(jsonData);

            });

    }
}

inputEle.addEventListener("keydown",inputUser);
