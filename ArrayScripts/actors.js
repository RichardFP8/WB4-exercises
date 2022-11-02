"use strict";
let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?",
            "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots",
            "Cowboy Boots"]
    },
];

function find187(actors) {
    let length = actors.length;
    for (let i = 0; i < length; i++) {
        if (actors[i].memID == 187) {
            return actors[i].name;
        }
    }
}
function atLeast3Films(actors) {
    let length = actors.length;
    let moreThanThree = [];
    let index = 0;
    for (let i = 0; i < length; i++) {
        let numFilms = actors[i].films;
        if (numFilms.length >= 3) {
            moreThanThree[index] = actors[i].name + " ";
            index++
        }
    }
    return moreThanThree;
}
function startsWithBob(actors) {
    let length = actors.length;
    let isBob = [];
    let index = 0;
    for (let i = 0; i < length; i++) {
        let getName = actors[i].name;
        let bob = getName.substring(0, 3);
        if (bob == "Bob") {
            isBob[index] = actors[i].name;
            index++;
        }
    }
    return isBob;
}
function atLeastStartWithA(actors) {
    //using outer and inner loop
    let length = actors.length;
    let members = [];
    let index = 0;
    //going through elements of main array
    for (let i = 0; i < length; i++) {
        //inner loop goes through the array in each element of MAIN array
        let films = actors[i].films; // hold the film array; get the propert first
        let innerLength = films.length; 
        for (let m = 0; m < innerLength; m++) {
            //test each element in the film array
            let startsA = films[m].charAt(0);
            if (startsA == "A") {
                members[index] = actors[i].name;
            }
        }
    }
    return members;
}

console.log(find187(academyMembers));
console.log();
console.log(atLeast3Films(academyMembers));
console.log();
console.log(startsWithBob(academyMembers));
console.log();
console.log(atLeastStartWithA(academyMembers));
