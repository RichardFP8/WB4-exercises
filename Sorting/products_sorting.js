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
let changedProducts = products;
products.sort(function(x, y){
    if(x.product < y.product){
        return -1;
    }
    else if(x.product == y.product){
        return 0;
    }
    else{
        return 0;
    }
    
});

function descendingPrice(x, y){
    return y.price - x.price;
}
changedProducts.sort(descendingPrice);

// console.log(products);
console.log("--------------");
console.log(changedProducts);