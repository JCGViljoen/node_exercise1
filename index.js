const fs = require('fs');

fs.readFile(`./data.txt`, 'utf-8', (err, data)=>{
    if (err) throw err;
    console.log(data);
})

fs.appendFile(`./data.txt`, `new-data`, (err, data)=> {
    if (err) throw err;
    console.log(data);
})