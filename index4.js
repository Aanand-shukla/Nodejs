console.log("hey");
console.log(100+200+400);
console.log("rj");
console.warn("tttt")

// #####################################################################################
 let http = require("http");
 let data= require("./data");
 http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application/jason'})
    res.write(JSON.stringify(data));
    res.end();
 }).listen(302);
