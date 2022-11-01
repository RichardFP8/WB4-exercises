"use strict";

let vehicles = [
    {
        color: "Silver",
        type: "Minivan",
        registrationState: "CA",
        licenseNo: "ABC-101",
        registrationExpires: new Date("3-10-2022"),
        capacity: 7
    },
    {
        color: "Red",
        type: "Pickup Truck", registrationState: "TX",
        licenseNo: "A1D-2NC",
        registrationExpires: new Date("8-31-2023"),
        capacity: 3
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "A22-X00",
        registrationExpires: new Date("9-31-2023"),
        capacity: 6
    },
    {
        color: "Red",
        type: "Car",
        registrationState: "CA",
        licenseNo: "ABC-222",
        registrationExpires: new Date("12-10-2022"),
        capacity: 5
    },
    {
        color: "Black",
        type: "SUV",
        registrationState: "CA",
        licenseNo: "EEE-222",
        registrationExpires: new Date("12-10-2021"),
        capacity: 7
    },
    {
        color: "Red",
        type: "SUV",
        registrationState: "TX",
        licenseNo: "ZZ2-101",
        registrationExpires: new Date("12-30-2022"),
        capacity: 5
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "CAC-7YT",
        registrationExpires: new Date("1-31-2023"),
        capacity: 5
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "CA", licenseNo: "123-ABC",
        registrationExpires: new Date("3-31-2023"),
        capacity: 5
    }
];

function isRED(vehicles) {
    let length = vehicles.length;
    let redVehicles = [];
    let index = 0;

    for (let i = 0; i < length; i++) {
        if (vehicles[i].color == "Red") {
            redVehicles[index] = vehicles[i];
            index++;
        }
    }
    return redVehicles;
}
//just compare the # of millieseconds
function expiredRegistration(vehicles) {
    let length = vehicles.length;
    let expiredVehicles = [];
    let index = 0;

    for (let i = 0; i < length; i++) {
        //convert the object's date value into millieseconds
        let registration = vehicles[i].registrationExpires.getTime();
        let currentDate = new Date();
        if (registration < currentDate) {
            expiredVehicles[index] = vehicles[i];
            index++;
        }
    }
    return expiredVehicles;
}
function atLeastSix(vehicles) {
    let length = vehicles.length;
    let holdSixVehicles = [];
    let index = 0;

    for (let i = 0; i < length; i++) {
        if (vehicles[i].capacity >= 6) {
            holdSixVehicles[index] = vehicles[i];
            index++;
        }
    }
    return holdSixVehicles;
}
function endsWithTriple(vehicles) {
    let length = vehicles.length;
    let endsWithTwoVehicles = [];
    let index = 0;

    for (let i = 0; i < length; i++) {
        //use slcie to get the last 3 characters; allowed to use negative indexes
        let getLicense = vehicles[i].licenseNo;
        let lastThree = getLicense.slice(-3);
        if (lastThree == "222") {
            endsWithTwoVehicles[index] = vehicles[i];
            index++;
        }
    }
    return endsWithTwoVehicles;
}

console.log(isRED(vehicles));
console.log();
console.log(expiredRegistration(vehicles));
console.log();
console.log(atLeastSix(vehicles));
console.log();
console.log(endsWithTriple(vehicles));
