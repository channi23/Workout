const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const key = "MySecretKey";
const port = 5000;
const dbuser = {
            "username" : "cse123",
            "password" : "cvr123"
      };
      
app.post("/",function(req,res)
{
      var u = req.query.username;
      var p = req.query.password;
      if(u == dbuser.username && p == dbuser.password)
      {
            jwt.sign(dbuser,key,function(err,token)
            {
                  res.json({token});
                  res.end();
            });
      }
      else
      {
            res.send("Invalid Credentials");
            res.end();
      }
});

app.get("/",function(req,res){res.send("welcome to server")})

app.listen(port, function()
{
      console.log("Server Started:"+port);
});