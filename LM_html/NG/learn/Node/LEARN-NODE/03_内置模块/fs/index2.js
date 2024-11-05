const fs = require('fs');

fs.writeFileSync('./target.md','I am your father')

const img = fs.readFileSync('./1.jpg')

fs.writeFileSync('./pic/2.jpg',img)

// console.log(img);