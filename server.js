var express = require("express");
var app = express();
var testES6 = require("./testES6.js");
var greet = new testES6('karthik').sayhello();
/*serves main page*/
app.get("/",function(req,res){
  res.sendfile('index.html');
});

var port = process.env.port ||5000;
app.listen(port,function(){
  console.log("calling ES6 code :: "+greet);
  console.log("listening on port : "+port);
});
