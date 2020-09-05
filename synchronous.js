const fs=require('fs');
fs.readFile('txw.text','utf-8',(err,data)=>{
    console.log(err,data);
});
console.log('this is shown first')