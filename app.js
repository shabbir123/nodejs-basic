const fs = require('fs');
const text = fs.readFileSync('Files/input.txt','utf-8')
//console.log(text)

let content = `Data Read from input.txt:${text} \n created at ${new Date()}`
fs.writeFileSync('Files/output.txt',content)


fs.readFile('Files/input.txt','utf-8',function(err,data){
    console.log(data)

})
console.log("reading file")