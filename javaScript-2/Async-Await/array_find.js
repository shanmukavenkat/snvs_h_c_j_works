const companyId = "PY234";
const employeeId = 637;

const companies = [
    {
        companyCode:"PY234",
        employees: [293, 730, 637]
    },
    {
        companyCode:"GR023",
        employees:[823, 563]
    },
    {
        companyCode:"HC754",
        employees: [511, 529, 943]
    },
    {
        companyCode:"PA439",
        employees: [276, 188, 333]
    },
    {
        companyCode:"CX536",
        employees: [431, 923]
    },
    {
        companyCode:"RD310",
        employees: [356, 901]
    }
];

let myPromise = new Promise((resolve,reject)=>{
    let eFind = companies.find(eachcompany => eachcompany.companyCode === companyId);

    let findEle =eFind?eFind.employees.includes(employeeId): false;

    let check = findEle && eFind ;
    check ? resolve("Employee Found"):reject("Company Not Found");
})

const newPromise = async() =>{
    try{
        const result = await myPromise;
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
newPromise();