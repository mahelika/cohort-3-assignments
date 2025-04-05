let ctr = 0;

function updateCtr() {
    console.clear();
    ctr++;
    console.log(ctr);
}

setInterval(updateCtr, 1000);