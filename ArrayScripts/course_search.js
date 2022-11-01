"use strict";
//an array that has 5 elements, each one an object; each object has 4 properties all strings, no dates/numbers
let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];

function findPROG200(courses) {
    let length = courses.length;
    //use for loop to check each element
    for (let i = 0; i < length; i++) {
        //test each element's program property to find
        if (courses[i].CourseId == "PROG200") {
            //once found return the start property value
            return courses[i].StartDate;
        }
    }

}
function titlePROJ500(courses) {
    let length = courses.length;
    for (let i = 0; i < length; i++) {
        if (courses[i].CourseId == "PROJ500") {
            return courses[i].Title;
        }
    }
}
function titles50(courses) {
    let length = courses.length;
    //use an empty array to collect all property' values that pass the test
    let classes = [];
    //we need to assign the added value with an index; declare/initiate outside loop so it's only one time;
    //when it's true, JS will add it to the array at index and then increment index for the next value to be assigned at the next index
    let index = 0;
    for (let i = 0; i < length; i++) {
        //find the fee value and convert it to number
        if (Number(courses[i].Fee) <= 50) {
            classes[index] = courses[i].Title;
            index++;
        }
    }
    return classes;
}

function classroom1(courses) {
    let length = courses.length;
    let classes = [];
    let index = 0;
    for (let i = 0; i < length; i++) {
        if (courses[i].Location == 'Classroom 1') {
            //if the location value matches, add the entire object to the new array
            classes[index] = courses[i];  
            index++;
        }
    }
    return classes;
}

console.log(findPROG200(courses));
console.log();
console.log(titlePROJ500(courses));
console.log();
console.log(titles50(courses));
console.log();
console.log(classroom1(courses));
