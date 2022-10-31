"use strict";
let billingAddress = { name:"Bob",
address:"123 Main Street", 
city:"Gotham City", 
state:"Gotham York", 
zip:10987 };

printContact(billingAddress);

function printContact(x){
    console.log(x.name + "\n" + x.address + "\n" + x.city + ", " + x.state + " " + x.zip);
}

