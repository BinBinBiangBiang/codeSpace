// 文件系统
// const fs = require('fs');

// 同步
// const sysncData = fs.readFileSync('./data.txt',{encoding: 'utf-8'});
// console.log(sysncData);

// 异步
// fs.readFile('./data.txt',{encoding: 'utf8'},(err,res) =>{
//   // 下面是回调，异步读取需要写回调，不然拿不到数据
//   if(!err){
//     console.log(res);
//   } 
// });

// const fs = require('fs/promises');

// fs.readFile('./data.txt',{encoding: 'utf8'}).then( res =>{
//   console.log(res);
// });

