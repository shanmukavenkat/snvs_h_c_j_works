const myPromise = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("1 second completed");
        },1000);
    });

};

myPromise().then((fromResolve)=>{
    console.log(fromResolve);
});