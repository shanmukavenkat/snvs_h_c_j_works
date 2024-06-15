let url = "https://apis.ccbp.in/jokes/random";



const doNewtworkcall = async ()=>{

    try{
        const response = await fetch(url);
        const jsonData = await response.json();
        console.log(jsonData);
    }
    catch (err){
        console.log(err);
    }
};

//doNewtworkcall();

const async_new = doNewtworkcall();
console.log(async_new);