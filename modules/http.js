const http=require('http');
http.createServer((req,res)=>{
   res.end("welcome to sercer")
}).listen(3000);