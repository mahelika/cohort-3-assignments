let ctr = 0;

function updateCtr(){
    console.clear();
    ctr++;
    console.log(ctr);

    setTimeout(updateCtr, 1000);
}

updateCtr();