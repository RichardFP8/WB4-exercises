"use strict";

//an array that has 6 elements; each is an object with two properties;
//one has a value of string type while the other has an array type;
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
getAverage(students);