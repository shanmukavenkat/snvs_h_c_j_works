const myPromise = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=> {
            resolve("1 sec completed");
        },1000);
    });
};
//console.log(myPromise());
myPromise().then((fromResolve)=>{
    console.log(fromResolve);
})