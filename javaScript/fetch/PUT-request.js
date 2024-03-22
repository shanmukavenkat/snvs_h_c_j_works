let data = {
    name:"A.s.n.v.s.komal",
    };

let options = {
    method: 'PUT',
    headers:{
        "Context-Type":"application/json",
        Accept: "application/json",
        Authorization:"Bearer 6d29e3ac25badab2d9c572cf2574ab1fbd5021d909d71a62889167fe97180b58"

    },
    body:JSON.stringify(data)
};
let url ="https://gorest.co.in/public-api/users/(id)";
fetch(url, options)
    .then(function (response){
        return response.json();
    })
    .then(function (JsonData){
        console.log(JsonData);
    })
