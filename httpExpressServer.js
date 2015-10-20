var express = require("express");
var app = express();

/*serves main page*/
app.get("/",function(req,res){
  res.sendfile('index.html');
});

var port = process.env.port ||5000;
app.listen(port,function(){
  console.log("listening on port : "+port);
});
