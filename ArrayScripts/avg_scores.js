"use strict";

let myScores = [92, 98, 84, 76, 89, 99, 100 ];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(scores){
    //length property is 1-based. Weird
    let length = scores.length;
    let sum = 0;
    //access each element, and add them up
    for(let i = 0; i < length; i++){
        sum += scores[i];
    }
    //calculate average and return results
    return ( sum / (length) ).toFixed(2);
}

console.log("My average is " + getAverage(myScores));
console.log("Your average is " + getAverage(yourScores));
