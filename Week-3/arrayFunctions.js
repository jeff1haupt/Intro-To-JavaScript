let arr = [ 1, 5, 152, 99, -1 ]; 
let names = ["Cole", "Jake", "Kossi", "Hannah"]

let timesFive = arr.map(function(num) { // num <- this can be called anything 
    return num * 5; 
})

let namesLength = names.map(function(name) { // num <- this can be called anything 
    return name.length; 
})

let sumOfLength = namesLength.reduce(function(a, c) {
    return a + c;
})

console.log(sumOfLength / names.length);

// console.log(names);
// console.log(namesLength); 
// map returns a new array
// console.log(arr);
// let sumOfArr = arr.reduce(function (a, c) { // 1st value is the acc and the 2nd value is the current element
//     console.log(`a is ${a} and c is ${c}`)
//     return a + c;
// }, 0) // this represents the starting value and default is 0

// console.log(sumOfArr);
// // 


// arr.forEach(function(e) { // e is the var placeholder for whatever the current element in the array is
//     let e2 = e * e;
//     console.log(e2);
// })
// console.log(arr);
// let lessThan100 = arr.filter(function(num) {
//     return num < 100;
// })

// let shortNames = names.filter( (name) => name.length <= 4 );

// console.log(lessThan100);
// console.log(shortNames);

// // Splice 
console.log(names);
let removed = names.splice(0, 3); // first number is the position in the array to start, 2nd how many to take
console.log(names);
console.log(removed);
