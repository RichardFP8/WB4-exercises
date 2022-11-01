"use strict";
let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 4.89 },
    { product: "Swedish Fish", price: 1.99 },
    { product: "Gummy Worms", price: 1.12 },
    { product: "Plain M&Ms", price: 6.34 },
    { product: "Peanut M&Ms", price: 3.85 },
    { product: "Swedish Fish", price: 1.89 },
    { product: "Peanut M&Ms", price: 2.59 },
    { product: "Swedish Fish", price: 4.79 },
];
function findFourDollars(candies) {
    let length = candies.length;
    let fourDollars = [];
    let index = 0;
    for (let i = 0; i < length; i++) {
        if (candies[i].price < 4) {
            fourDollars[index] = candies[i].product + " ";
            index++;
        }
    }
    return fourDollars;
}
function findMAndM(candies) {
    let length = candies.length;
    let justM = [];
    let index = 0;
    for (let i = 0; i < length; i++) {
        let findM = candies[i].product;
        if (findM.indexOf("M&M") != -1) {
            justM[index] = candies[i].product + " ";
            index++;
        }
    }
    return justM;
}
function findSwedishFish(candies){
    let length = candies.length;
    let swedish = 0;
    for (let i = 0; i < length; i++) {
        if (candies[i].product == "Swedish Fish") {
            swedish++;
        }
    }
    return "We have " + swedish + " Swedish fish";
}

console.log(findFourDollars(products));
console.log();
console.log(findMAndM(products));
console.log();
console.log(findSwedishFish(products));
