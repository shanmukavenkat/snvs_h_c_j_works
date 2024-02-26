let numbers = [17, 31, 77, 20, 63];

function findIndexOfNumber(){
    let searchBar = document.getElementById("userInput").value;
    let spanElement = document.getElementById("indexOfNumber");
    let findIndex = numbers.findIndex(function(eachItem){
        if( parseInt(searchBar) === eachItem){
            return true;
        }else{
            return false;
        }
    });
    spanElement.textContent = findIndex;


}