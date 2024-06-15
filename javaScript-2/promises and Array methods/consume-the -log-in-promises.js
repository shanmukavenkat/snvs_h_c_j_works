
    const pin = (10);

    let promise = new Promise((resolve,reject)=>{
        resolve(pin)
    });

    promise.then((response)=>{
        console.log(response);
    });


