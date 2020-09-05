const http=require('http');
const fs=require('fs');
const filecontent=fs.readFileSync('ex2.html');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'})
    res.end(filecontent);

});

server.listen(80,'127.0.0.1',()=>{
    console.log('server has been started at port 80')
});