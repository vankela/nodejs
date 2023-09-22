let filesystem =require('fs')

filesystem.readFile('./topics.txt',(err,data)=>{//err,data is Call back function
    if(err){
        console.log("file not found")
    }
    else{
        console.log(data.toString())
    }

})
console.log("before reading")