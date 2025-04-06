/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    let p = new Promise((resolve) => {
        setTimeout(()=> {
            resolve();
        }, n * 1000);
    });
    console.log("waiting for n seconds");
    return p;
}

wait(10);
module.exports = wait;
