const fs = require('fs')

// const info = fs.readdirSync('./test')  // 读取到文件夹中的所有文件名 以数组形式返回
// console.log(info);

// fs.mkdirSync('./test-dir/data/list',{recursive:true});  // 创建文件夹，可以多层级，但是第二个参数recursive为true

// fs.rmdirSync('./test-dir',{recursive:true}); // 删除文件

fs.watch('./',{recursive:true},(eventType,filename) =>{
  console.log(`当前文件夹下${filename}文件变更为:${eventType}`);
}); 

fs.appendFileSync('./data.txt','好好好')  // 往文件写入内容
