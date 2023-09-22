let fs=require('fs')

fs.unlink('./topic1.txt',(err)=>{
    if(err){
        console.log("delete is not access")
    }

        else{
            console.log("delete is success")
        
    }
})