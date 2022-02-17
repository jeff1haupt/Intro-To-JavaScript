let arr = []; 
console.log(arr);

arr.push("String value");
arr.push(true);
arr.push(3.14);
arr.push([1, 2, 3]);
let num = 1023230324234234;
arr.unshift(num);
// let removedFirstElement = arr.shift();
// console.log(arr);
// console.log(removedFirstElement);
// let removedLastValue = arr.pop();
// console.log(removedLastValue);
// console.log(arr)
console.log(arr);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[3][0]); // the first number is the outer array and the second number is the inner array

let length = arr.length; // returns an integer value of the number of elements in the array
console.log(length);
console.log(arr[length - 1]); //returns the last element in an array
console.log(arr[0]);