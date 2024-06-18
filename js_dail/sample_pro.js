let testOne = {
    match1: "India vs England",
    scores: [304, 578]
};

let testTwo = {
    match2: "India vs England",
    scores: [329, 286]
};

let testMatches = {
    ...testOne,
    ...testTwo
};

let result = testMatches.scores[0] + testMatches.scores[1];
console.log(testMatches.scores[0]);
console.log(testMatches.scores[1]);

console.log(result);