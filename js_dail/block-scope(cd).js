function practise(){
    // var x;
    console.log(x);
    //the below curly braces are not effecting the scope of the variable
    {
        var x = 20;
        ///the var variable are not block scope
        //they are function scope
        //or if there is no function then they are global scope
        {
            let x = 5;
        }
        console.log(x);
    }

}

practise();

