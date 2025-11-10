const fs = require('fs')
fs.writeFile("b.txt","this is a text","utf-8",(err)=>{
    if(err){
        return
    }
});