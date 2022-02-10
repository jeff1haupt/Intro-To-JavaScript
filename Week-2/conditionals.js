// checks to see if something is true or false then does something based on that condition


// if statement
// if (true) {
//     console.log("This printed");
// }

// if (!false) {
//     console.log("This did not print");
// }

// let str = "Hello World"

// let arr = [1, 2, 3]

// function squared(x) {
//     return x * x;
// }


// if ( squared(2) > 20) {
//     console.log("Both conditions are met");
// }

// if <-- keyword 
// (evaluate some condition using boolean logic)
// do something if that's true




// let cash = 350;
// let price = 250; 

// if ( cash >= price ) {
//     console.log("I can buy this!");
// }

// // if else 
// let grade = "71";

// console.log("5" == 5);
// if (grade > 90) {
//     if ( grade > 98) {
//         let letterGrade = "A+";
//         console.log(`Your letter grade is: ${letterGrade}`);
//     } else {
//         let letterGrade = "A";
//         console.log(`Your letter grade is: ${letterGrade}`);
//     }
// } else { // only gets to this if false
//     console.log("You did not get an A in the class")
// }

// // if-else if-else

// let credits = 82;

// if ( credits > 90) { // when 82 evaluates to false
//     console.log("You are a Senior");
// } else if ( credits > 60 ) { // these are sequential, so this one is next 
//     console.log("You are a Junior");
// } else if ( credits > 30 ) {
//     console.log("You are a Sophomore");
// } else {
//     console.log("You are a Freshman");
// }

// // more complex if statements combined with loops

// let counter = 0;

// while( counter < 100 ) { // loop outside 
//     if ( counter % 3 == 0 && counter % 5 == 0) { // each time through the loop the conditional is checked
//         console.log("FizzBuzz");
//     } else if ( counter % 3 == 0 ) {
//         console.log("Fizz");
//     } else if ( counter % 5 == 0 ) {
//         console.log("Buzz");
//     } else {
//         console.log(counter);
//     }
//     counter++;
// }