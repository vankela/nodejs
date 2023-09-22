let fs=require('fs')

fs.appendFile('./topic1.txt',"adding extra",(err)=>{
    if(err){
        console.log("write is not access")
    }

        else{
            console.log("write is success")
        
    }
})