function callback(element) {
    //do things 
}

function needsToComplete(url) {
    const xhr = new XMLHttpRequest();
    // open 
    // pass
    //headers 
}

console.log(needsToComplete(url, callback)) // DO NOT USE PARANETHESIS

needsToComplete('https://www.getsomecode.com', doSomething => console.log(doSomething))