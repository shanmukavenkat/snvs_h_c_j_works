const myPromise = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject('rejected');
        },2000);
    });
}

myPromise().then((fromResolve)=>{
    console.log(fromResolve);
}).catch((fromReject)=>{
    console.log(fromReject);
});