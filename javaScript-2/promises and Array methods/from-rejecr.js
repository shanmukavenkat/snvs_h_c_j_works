
    const errorMessage ="the message rejected"
    let promise = new Promise((resolve,reject)=>{
        reject(errorMessage)
    });

    promise.then((fromResolve)=>{
        console.log(fromResolve);
    }).catch((fromReject)=>{
        console.log(fromReject);
    });