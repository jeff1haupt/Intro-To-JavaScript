var bankAccountBalance = 52.10 // typeof number

// {var, let, const} {variable name} = {value}
console.log(typeof bankAccountBalance);
console.log(bankAccountBalance);

var firstName = "Jeff" // typeof string
console.log(typeof firstName);

var emailAddress = 'jhaupt@southbendin.gov' // typeof string
console.log(typeof emailAddress);

var isItSnowing = true; // typeof boolean
console.log(typeof isItSnowing); 
console.log(!isItSnowing);

var isThisTrue = 5 > 10;
console.log(isThisTrue);

const NewStudent = {    //typeof Object
    name: firstName,
    email: emailAddress,
    hasPets: true
}
console.log(typeof NewStudent);

// There are also a few extras that you won't use that often, but should know

let emptyVar = null; //typeof Object????
console.log(typeof emptyVar);

let emptyString; //typeof undefined
console.log(typeof emptyString);

// notice the camelCase 