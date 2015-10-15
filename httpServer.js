var http = require('http');
var server = http.createServer(function(request,response){
response.writeHead(200,{"Content-Type":"text/html"});
response.write("<!DOCTYPE 'html'>");
response.write("<html>");
response.write("<head>");
response.write("<title>Testing</title>");
response.write("</head>");
response.write("<body>");
response.write("Reading This!");
response.write("</body>");
response.write("</html>");
resopnse.end();
});
server.listen(8080);
console.log("server listening");
