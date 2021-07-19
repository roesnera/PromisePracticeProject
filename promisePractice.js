// Below is a function that returns a promise that is empty at this time.
// If data isn't a number, return a promise rejected instantly and give the data "error" (in a string)
// If data is an odd number, return a promise resolved 1 second later and give the data "odd" (in a string)
// If data is an even number, return a promise rejected 2 seconds later and give the data "even" (in a string)

// Function to return a promise
function newJob(data) {
    return new Promise((resolve, reject) => {

    });
}


// To check output with string input, expect promise to be rejected
let strCheck = newJob('Oops');
numCheck.then((data) => {
    console.log("That's not right, data: ", data)
})
.catch((data) => {
    console.log("Nicely done.")
});


// To check output with odd number input, expect promise to resolve after 1 second
let oddCheck = newJob(7);
oddCheck.then((data) => {
    console.log('Nicely done. Check for timing.')
}).catch((data) => {
    console.log("That's not right, data: ", data)
})


// To check output with even number input, expect promise to be rejected after 2 seconds
let evenCheck = newJob(2);
evenCheck.then((data) => {
    console.log("That's not right, data: ", data)
}).catch((data) => {
    console.log('Nicely done. Check for timing.')
});