let filesystem =require('fs')

let data1=filesystem.readFileSync('./topics.txt');
console.log(data1.toString())
console.log("before reading")