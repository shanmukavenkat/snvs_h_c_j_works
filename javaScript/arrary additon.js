function main() {
    // arrayOfScores
    let arrayOfScores = JSON.parse(readLine().replace(/'/g, '"'));
    function calculateTotalScore(arrayOfScores) {
        let [firstMatchScore, secondMatchScore, thirdMatchScore] = arrayOfScores;
        return firstMatchScore + secondMatchScore + thirdMatchScore;
    }
    let totalScore = calculateTotalScore(arrayOfScores);
    console.log(totalScore);
}
