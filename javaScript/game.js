function main() {
    // arrayOfFriends
    let arrayOfFriends = JSON.parse(readLine().replace(/'/g, '"'));

    function getPreferredGameMode(noOfFriends){
        let length_of=arrayOfFriends.length;

        if (length_of===0){
            return "Solo";
        }
        else if(length_of===1){
            return "Dual";
        }
        else{
            return "Squad";
        }
    }
    let noOfFriends=arrayOfFriends.length;
    let gameMode = getPreferredGameMode(noOfFriends);
    console.log(gameMode);
}
