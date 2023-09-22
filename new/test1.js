function test(){
    console.log("test");
}
function sum(a,b){
    console.log(a+b);
}
function sub(a,b){
    console.log(a-b)
}
let obj={//objects
    name:"sai",
    age:20
}

let name="abc"

module.exports={
    test,sum,obj
}
module.exports.name=name//add the properties