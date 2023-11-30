// fs 读取文件
// promises + then / async + await 解决方案

const fs = require('fs')



function readFileByPromise(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) throw err
      resolve(data)
    })

  });
}


readFileByPromise('./a.txt').then((data) => {
  console.log(data);
  return readFileByPromise('./b.txt');
}).then((data2) => {
  console.log(data2);
  return readFileByPromise('./c.txt');
}).then((data3) => {
  console.log(data3);
});


// 改成async
function readFileByPromise(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf-8', (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}

// const asyncReadFile = async () => {
// 	const a = await readFileByPromise('./a.txt')
// 	const b = await readFileByPromise('./b.txt')
// 	const c = await readFileByPromise('./c.txt')
// 	console.log(a)
// 	console.log(b)
// 	console.log(c)
// }


// 上述代码加上异常捕获
const asyncReadFile = async () => {
  try {
    const a = await readFileByPromise('./a.txt')
    const b = await readFileByPromise('./b.txt')
    const c = await readFileByPromise('./c.txt')
    console.log(a, b, c)
  }catch(e){
    console.log("Failed to read file");
  }
}

asyncReadFile()

