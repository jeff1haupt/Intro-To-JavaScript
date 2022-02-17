var newBalance = bankAccountBalance + 100; 
var hundred = 100;
var newBalance = bankAccountBalance + hundred
console.log(newBalance); // logs out 152.1
console.log(newBalance.toFixed(2)) //logs out 152.10
console.log(newBalance - 25);

var x = 5;
var y = 6;

y = y + 3 + x; // y is now set to 8
console.log(y);

// y = 2*x + 5; // y is now set to 15
// console.log(y); 

// var five = "5";
// var a = 5;
// var aFive = five + a; // JavaScript will concatenate and make typeof string
// console.log(typeof aFive);
// console.log(five + a);

// z = x + y; // z is now 20, y is 15, x is 5
// console.log(`The value of z is: ${z}`); //This is using template literals - we discuss these later on
// console.log(`The value of y is: ${y}`);
// let stringX = "The value of x is: " + x;
// console.log(stringX); //This gives a similar result as the template literal, but is called concatenation

// // y = x // y is now 5 and x is still 5
// // console.log("y is equal to " + y + "; x is equal to " + x);

// // //Don't forget your order of operations 
// let t = y + x * z + 2^2; // t is 105
// let s = (y + x) * z + 2^2; // s is 200
// console.log(`s == ${s}`);
// console.log(`t == ${t}`);
