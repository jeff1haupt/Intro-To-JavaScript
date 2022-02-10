// for loops - MOST COMMON 

// 3 parts to the for loop 
// 1st part -declaration of the counter (let i = 0) ONLY RUNS ONCE 
// 2nd part is the conditional ( i < 100 )
    // 2b - if true do the stuff between the curly braces
// 3rd part is the incrementor (i++, i = i + 1, i += 5)

// for ( let i = 0; i < 100; i += 5 ) { 
//     console.log(i);
// }

// for ( let i = 100; i > 0; i-- ) {
//     if (i == 11) {
//         console.log("I found 11!!!");
//         break; // allows you to get out of the loop early
//     } else {
//         console.log(`${i} is not equal to 11`);
//     }
// }

// for ( let i = 0; i < 20; i++ ) {
//     if ( i % 2 == 0) {
//         console.log(i);
//     }
// }

// let arr = [ 5, 15, 3, 99, -1, 512];

// for ( i in arr ) {
//     console.log(i);
// }

// for ( i of arr ) {
//     console.log(i)
// }

//while loops 

// let counter = 10;

// do {
//     console.log("This is the do while loop");
//     counter++;
//     console.log(counter);
// } while (counter < 10) 


// counter = 1;

// while (counter < 10 ) {
//     console.log("This is the while loop");
//     counter++;
//     console.log(counter);
// }

// // the difference between x++ and ++x

// let y = 0;
// console.log(y);
// console.log(++y) // y = y + 1 happening first and then print the value of y
// console.log(y++) // print y and then do the math y = y + 1
// console.log(y);