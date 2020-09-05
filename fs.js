 console.log('hello here')
 const fs=require('fs')
 let text = fs.readFileSync('tx.text', 'utf-8');
  console.log(text);

   text2=text.replace('THIS', 'WHAT');
   fs2=fs.writeFileSync("sdsd.text",text)
   console.log(  ` THE TEXT HAS BEEN CHANGED TO ${text2} from ${text} and has been saved in a file name as sdsd.text`);




//PRACTICE PURPOSE ONLY
//  text2=text.replace('THIS', 'WHAT');
//  fs2=fs.writeFileSync("tx.text",text2)
//  console.log(  ` THE TEXT HAS BEEN CHANGED TO ${text2} from ${text} and has been saved in a file name as tx.text`);
// const fs=require('fs');
// let text3=fs.readFileSync('ex.html','utf-8');
// // console.log(fs)
// text3=text3.replace('LET','WHEN');
// fs3=fs.writeFileSync('ex2.html',text3 );
// console.log('ooops')

