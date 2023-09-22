let fs=require('fs')

fs.writeFile('./topic.txt',"updating",(err,data)=>{
    if(err){
        console.log("write is not access")
    }

        else{
            console.log("write is success")
        
    }
})