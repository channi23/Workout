const fs = require('fs')
fs.readFile("b.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("data in the file is \n "+data);
});
console.log("after read file stmt 1");
console.log("after read file statement 2");