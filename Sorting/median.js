"use strict";

//an array that has 6 elements; each is an object with two properties;
//one has a value of string type while the other has an array type;
let students = [
    { name: "Zephaniah", scores: [100, 96, 99, 92] },
    { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
    { name: "Siddalee", scores: [86, 72, 92] },
    { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
    { name: "Elisha", scores: [89, 100] },
    { name: "Ezra", scores: [100, 99, 100, 87] },
   
];

//altered my original function; it used to print out the average of each student;
// this time I stored just the averages into an array; this allows me to sort it and find the median for just the averages

function getAverage(students) {
    let outerLength = students.length;
    let innerLength;
    let sum = 0;
    let numOfElements = 0;
    let averages = [];
    let index = 0;
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
//outer loop: store in variable and add it to the array of just averages
        let temp =  (sum / numOfElements).toFixed(2);
        averages[index] = parseFloat(temp);
        index++;
    }
    return averages;
}
let justAverages = getAverage(students);

//sorted array with averages in ascending order
function sortAverages(x, y){
    return x - y;
}
function findMedian(array){
    let length = array.length;
    //getting the indexes
    let upper = length/2;
    let lower = upper - 1;
    let roundDown = Math.floor(upper);
    
    if(length%2 == 0){
        let sum = array[upper] + array[lower];
        return (sum / 2).toFixed(2) ;
    }
    else{
        return array[roundDown];
    }
}
justAverages.sort(sortAverages);
console.log(justAverages);
console.log(findMedian(justAverages));

