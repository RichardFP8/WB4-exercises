"use strict";
//an array with 3 elements; each is an object with two properties/values
let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
 ];

 function subTotal(x){
    let length = x.length;
    let subTotal = 0;
    for(let i = 0; i < length; i++){
        subTotal += x[i].price;
    }
    return subTotal.toFixed(2);
 }
 //calculate for tax from the function subtotal; calculate tip from subtotal with tax
let justTax = (subTotal(lunch) * 0.08).toFixed(2);
let adjustedTotal = Number(subTotal(lunch)) + parseFloat(justTax);
let justTip = (adjustedTotal * 0.18).toFixed(2);
let finalTotal = parseFloat(adjustedTotal) + Number(justTip);


 console.log("Subtotal: $" + subTotal(lunch) + "\nTax: $" + justTax +
 "\nTip: $" + justTip + "\nTotal: $" + finalTotal);