const http = require("http");
http.createServer((req,res)=>{
    res.write("<h2>hello this is me</h2>");
    res.end();
}).listen(3400)