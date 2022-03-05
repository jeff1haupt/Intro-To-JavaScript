
// backtick ` next to the "1" key 

let result = 5 * 5;
let mathProblem = `5 times 5 = ${result}`;
// console.log(mathProblem);
// console.log(typeof mathProblem);

// let x = 20;
// let y = 10;
// let mathProblems = `${x} x ${y} = ${x * y}`;
// console.log(mathProblems);

let url = (id) => `https://thumbs.dreamstime.com/b/golden-retriever-dog-${id}.jpg`;
console.log(url(1500));

// using concatenation with DOM elements 

let firstName = "Jeff";
let occupation = "Developer";

let div1 = document.getElementById("box1");
let div2 = document.getElementById("box2");

div1.innerHTML = '<div class="content">' +
'<h1>My name is ' + firstName + ' and I am a ' + occupation + ' for the City of South Bend</h1>' +
'<p><img src="' + url(21668976) + '" /></p>' +
'<p><strong>Note:</strong> If you don\'t escape "quotes" properly, it will not work.</p>' +
'</div>';

div2.innerHTML = `
    <div class="content">
        <h1>My name is ${firstName} and I am a ${occupation} for the City of South Bend</h1>
        <p><img src="${url(21668976)}" /></p>
        <p><strong>Note:</strong> With template literals you don't have to worry about escaping quotes, it will work!!!.</p>
    </div>`




