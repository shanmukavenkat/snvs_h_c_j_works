const myPromise = () =>{
    return new Promise((resolve ,reject) =>{
       setTimeout( ()=>{
           reject("it was rejected")
       },1000)

    });
}
myPromise().then((fromResolve)=>{
  console.log(fromResolve);
}).catch((fromReject)=>{
    console.log(fromReject)
    }
);