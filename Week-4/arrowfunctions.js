
let myName1 = (first, last) => {
    //call function 
    return `${first} ${last}`;
}

let addTwoNums = (a, b) => a + b
console.log(addTwoNums(2, 2))

let myName2 = (first, last) => `${first} ${last}`;

function thisISPreferred(x, y) {
    // do things 
}

// console.log(myName("Jeff", "Haupt"));
console.log(myName2("John", "Doe"));
console.log(myName2("Tim", "Smith"));
console.log(myName2("Jane", "Doe"));

function needsReturn( a, b ) {
    return a + b;
}

console.log(needsReturn(4, 4))