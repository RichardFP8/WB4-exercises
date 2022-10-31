"use strict";

let product = "XYZ:1234-L";
let test = parsePartCode(product);

function parsePartCode(x) {
    //assume that number can vary(digits)
    const getColon = x.indexOf(":");
    const getDash = x.indexOf("-");

    //get parts
    const getSupplier = x.substring(0, getColon);
    const getNumber = x.substring(getColon + 1, getDash);
    const getSize = x.substring(getDash + 1);

    //create object and return
    let product = { supplier: getSupplier, number: getNumber, size: getSize};
    return product
}

console.log("Supplier: " + test.supplier + "\nProduct Number: " + test.number + "\nSize: " + test.size);