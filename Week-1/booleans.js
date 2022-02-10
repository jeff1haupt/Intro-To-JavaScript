let enoughMoney = newBalance < 50; //logs true
console.log(newBalance);
console.log(enoughMoney);

for ( let i = 0; i < 5; i++ ) {
    console.log(enoughMoney);
    let cantGetToThis = 0;
}

// console.log(cantGetToThis);

var greaterThan = 5 > 20; //logs false
console.log(greaterThan);

let isNull = emptyVar == null; //logs true
console.log(emptyVar);
console.log(isNull);

let weird = "5" == 5; //logs true
console.log(weird);

let notWeird = "5" === 5; //logs false 
console.log(notWeird);

const num5 = 5;
num5 = 10;
console.log(num5);

// prior to ES6 JavaScript only had var
// let very similar to var but it fixes var's scope problems 
// const it's a constant - you won't change this