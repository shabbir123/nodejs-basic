const fs = require('fs');
const text = fs.readFileSync('Files/input.txt','utf-8')
console.log(text)

let content = `Data Read from input.txt:${text} \n created at ${new Date()}`
fs.writeFileSync('Files/output.txt',content)