const fs = require('fs');

const cleanFile = (filePath) => {
    fs.readFile(filePath, 'utf8', (err,data) => {
        if(err){
            console.log(err);
        }

        const cleanFile = data.replace(/\s+/g, ' ').trim();

        fs.writeFile(filePath, cleanFile, 'utf8', (err)=> {
            if(err){
                console.log(err);
                return;
            }

            console.log('successful');
        });
    });
}

const filePath = 'eg.txt';
cleanFile(filePath);