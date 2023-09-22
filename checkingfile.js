let fs=require('fs')

fs.readdir('./new',(err,data)=>{
    if(err){
        console.log("read is of folder not success")
    }

        else{
            console.log("reading of folder  success")
            console.log(data)
        
    }
})