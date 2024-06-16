
    const isResourceAvailable = JSON.parse(readLine());

    let promise = new Promise((resolve,reject)=>{
        isResourceAvailable === true ? resolve("Tree Planted") : reject("Resource not available")
    })

    const newPromise = async() =>{
        try{
            const result = await promise;
            console.log(result);
        }
        catch(error){
            console.log(error);

        }
    }
    newPromise();
