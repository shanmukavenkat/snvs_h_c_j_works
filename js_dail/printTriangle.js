let printTriangle =(num)=>{
    for(let i = 0; i<=num; i++){
        console.log("* ".repeat(i));
    }
    for(let j= 0; j<=num; j++){
        console.log("* ".repeat(num-j))
    }
}

printTriangle(8);
