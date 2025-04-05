const fs = require('fs').promises;

async function write(filename, content){
    try {
        await fs.writeFile(filename, content, 'utf8');
        console.log('successful');
    } catch (error) {
        console.error(error);
    }
}

write('eg.txt', 'wanna get into super30 2.0 so bad :(');