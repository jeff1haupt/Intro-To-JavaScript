function nameItSomethingMeaningful() {
    alert("This is a function");
}

// nameItSomethingMeaningful(); 

/*************************************************** */

function returnValue(a, b) {
    return a * b;
}

// let returnedNum = returnValue();
// console.log(typeof returnedNum);

// console.log(returnedNum);

// /************************************************** */

function withParameter(num) { // num is the parameter 
    // return 30 * 30 
    return num * num;
}

// function sroot(num) {
//     return num * num
// }

// let sroot = Math.sqrt(225);
// console.log(sroot);

// console.log(withParameter(30)); // 3 is the argument being passed in

// /*************************************************** */

// function withTwoParameters(name, num) {
//     let tempName = "";
//     for ( let i = 0; i < num; i++ ) {
//         tempName += name;
//     }
//     return tempName;
// }

// console.log(withTwoParameters("Amanda", 15));

// /***************************************************? */

// function functionAsParameter(rv, num) {
//     return `The function returnValue() provided a value of ${rv}.  This number multipled by ${num} is ${num * rv}`
// }

// let functionReturn = functionAsParameter(returnValue(5, 6), 10);
// console.log(functionReturn);

function defaultValue(num1, num2 = 10) { // num2 has a default of value 10
    return num1 * num2;
}

console.log(defaultValue(5, 2));
console.log(defaultValue(5));