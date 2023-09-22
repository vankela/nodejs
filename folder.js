let fs=require('fs')

fs.mkdir('./folder',(err)=>{
    if(err){
        console.log("write is not access")
    }

        else{
            console.log("write is success")
        
    }
})
console.log("before writing")


//we need remove the folder write rmdir