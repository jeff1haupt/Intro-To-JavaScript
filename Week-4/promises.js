// let promise = new Promise( (resolve, reject) => {
//     setTimeout( () => resolve("The code finished"), 3000);
//     setTimeout( () => reject(new Error("This is broken and rejected")), 5000)
// })
// console.log(promise)

let nasaKey = 'ItlIhm2hRnVZVjEyCcAjD01NYWLZcmDPK7bixC1Y'
let url = `https://api.nasa.gov/planetary/apod?api_key=${nasaKey}`

// const apiCall = (url) => {
//     fetch(url)
//         .then( res => res.json() )
//         .then( res => {
//             let url = res.url 
//             console.log(url);
//         })
            
// }

function callback(message) {
    //do things 
    console.log(message)
}

function needsToComplete(url) {   
    
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url)
    xhr.send()
    xhr.onload = () => callback(setTimeout( () => console.log("Pause"), 5000))
}

// console.log(needsToComplete(url, callback)) // DO NOT USE PARANETHESIS

needsToComplete(url)




