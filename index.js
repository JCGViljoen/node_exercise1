const fs = require('fs');

fs.writeFileSync(`./message.txt`, 'utf-8', (err, data)=>{
    if (err) throw err;
    console.log(data);
})

fs.readFile(`./message.txt`, 'utf-8', (err, data)=>{
    if (err) throw err;
    console.log(data);
})

fs.appendFile(`./message.txt`, `new-data`, (err, data)=> {
    if (err) throw err;
    console.log(data);
})

