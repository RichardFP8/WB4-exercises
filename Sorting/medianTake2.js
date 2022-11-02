"use strict";
let students = [
    { name: "Zephaniah", scores: [100, 96, 99, 92] },
    { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
    { name: "Siddalee", scores: [86, 72, 92] },
    { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
    { name: "Elisha", scores: [89, 100] },
    { name: "Ezra", scores: [100, 99, 100, 87] }
];

//using a function just to assume that I could be given any array
function getAverage(students) {
    let outerLength = students.length;
    let innerLength;
    let sum = 0;
    let numOfElements = 0;
    //outer loop: from one object to the next; its where I access the scores property and get the inner array's length
    for (let i = 0; i < outerLength; i++) {
        //the value would be the inner(scores) array
        let studentScores = students[i].scores;
        innerLength = studentScores.length;

        //inner loop: now that we have the inner array; add the scores, keeping track of # of elements too 
        for (let n = 0; n < innerLength; n++) {
            sum += studentScores[n];
            numOfElements++;
        }
        //outer loop: print each student's average once inner loop stops executing
        console.log(students[i].name + " got an average of: " + (sum / numOfElements).toFixed(2));
    }
}
function getMedian(students) {
    let outerLength = students.length;
    for (let i = 0; i < outerLength; i++) {
        //each time, the scores array will be accessed
        //sort each objects's array;iow. each student's scores 
        let scores = students[i].scores;
        let innerLength = scores.length;
        scores.sort(sortArray); //makes it easier to read? calling it instead of declaring it here
        let middle = innerLength / 2;
        let lowerMiddle = middle - 1;
        let oddMedium = Math.floor(middle);
        if(innerLength %2 == 0){
            let average = (scores[lowerMiddle] + scores[middle]) / 2;
            console.log(students[i].name +  "'s middle score is: " + average);
        }
        else{
            console.log(students[i].name +  "'s middle score is: " + scores[oddMedium]);
        }
        let lowScore = scores[0];
        let highScore = scores[innerLength - 1];
        console.log(students[i].name + "'s lowest score is: " + lowScore + "\nTheir highest is: " + highScore);
    }

}
function sortArray(x, y){
    return x - y;
}
getAverage(students);
console.log("-------------");
getMedian(students);