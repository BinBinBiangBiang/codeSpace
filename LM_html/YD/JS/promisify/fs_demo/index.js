// node 内置的模块化系统 commonJS
// fs 文件模块 内置的
// 文件读取是耗时的 因为要把文件从硬盘读取到内存上  内存的读取是快的  而硬盘的读取是很满的 所以文件的读取是异步的
const fs = require('fs');

// 第二个参数直接以utf-8的编码格式读取
fs.readFile('./a.txt', 'utf-8', ((err, data) => {
  // 后端 稳定性排第一位 所以node的参数第一个一般都是err
  if (err) throw err;
  // 打印的是 buffer 二进制流 
  console.log(data);
  fs.readFile('./b.txt', ((err, data2) => {
    // 后端 稳定性排第一位 所以node的参数第一个一般都是err
    if (err) throw err;
    // 打印的是 buffer 二进制流 
    // toString() 可将二进制流转换
    console.log(data2.toString());
    fs.readFile('./c.txt', ((err, data3) => {
      // 后端 稳定性排第一位 所以node的参数第一个一般都是err
      if (err) throw err;
      // 打印的是 buffer 二进制流 
      // toString() 可将二进制流转换
      console.log(data3.toString());
    }))
  }))
}))

