const fs = require('fs');

fs.readFile('eg.txt', 'utf8', (err,data)=> {
    if (err){
        console.log(err);
    } else {
        console.log('File content:', data);
    }
});

const op = () => {
    let sum = 0;
    for(let i =0; i <100000; i++){
        sum += i;
    }
    console.log('operation done');
}

op();