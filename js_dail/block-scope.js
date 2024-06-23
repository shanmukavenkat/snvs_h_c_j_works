let x = 10;
{
    //temporal dead zone
    console.log(x);
    let x = 20; //getting error
    console.log(x);
}