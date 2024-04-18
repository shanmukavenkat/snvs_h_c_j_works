let formData = {
    name:"",
    email:"",
    status:"Active",
    gender:"Male"

};




let workingStatus = document.getElementById("status");
workingStatus.addEventListener("change",function(event){
    formData.status = event.target.value;
    console.log(formData);
});

let genderMale = document.getElementById("genderMale");
genderMale.addEventListener("change",function(event){
    formData.gender = event.target.value;
});


let genderFemale = document.getElementById("genderFemale");
genderFemale.addEventListener("change",function(event){
    formData.gender = event.target.value;
});


let nameEle = document.getElementById("name");
let nameErr = document.getElementById("nameErrMsg");

let emailEle = document.getElementById("email");
let emailErr = document.getElementById("emailErrMsg");

nameEle.addEventListener("blur", function(event){
    if (event.target.value === ""){
        nameErr.textContent = "Required*";
        nameErr.style.color = "red";
    }else{
        nameErr.textContent = "";
    }
    formData.name = event.target.value;
});

emailEle.addEventListener("blur", function(event){
    if (event.target.value === ""){
        emailErr.textContent = "Required*";
        emailErr.style.color = "red";
    }else{
        emailErr.textContent = "";
    }
    formData.email = event.target.value;
});

function submitFormData(formData){
    let option ={
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            Authorization:"Bearer 99fecd943cfe4a0f171882d716b2cfccf868e7511417398c94cfce6616ced7de"
        },
        body:JSON.stringify(formData)
    };
    let url = "https://gorest.co.in./public-api/users";

    fetch(url,option)
        .then(function(response){
            return response.json();
        })
        .then(function(jsonData){
            if(jsonData.code === 422){
                jsonData.data[0].message === "has already been taken";
                emailErr.textContent = "Email Already Exists!";
            }
            console.log(jsonData);
        });

}

let formEle = document.getElementById("addUserForm");

formEle.addEventListener("submit",function(event){
    event.preventDefault();
    submitFormData(formData) ;
});