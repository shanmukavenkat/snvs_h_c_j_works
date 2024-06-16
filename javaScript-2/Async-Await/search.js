const userName = 'Abhiram';
const users = ["Abhiram", "Gabrill", "Mosh", "Alia", "Rehman", "Manoj"];

let promise = new Promise((resolve,reject)=>{
    users.includes(userName)? resolve("User Found"):reject("User Not Found")
});

const newPromise = async () =>{
    try{
        const result = await promise;
        console.log(result)
    }
    catch(err){
        console.log(err);
    }
}
newPromise();


const companyObject = companies.find(eachCompany => eachCompany.companyCode === companyId);