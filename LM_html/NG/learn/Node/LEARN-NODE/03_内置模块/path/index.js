const { log } = require('console')
const path = require('path')

// console.log(path.join('a','b','c'));

// console.log(path.join(process.cwd(),'model','index'));  // 打印当前项目所在的路径  这里我后面还拼接了东西，就是可以往下找什么文件的意思

// console.log(path.resolve('a','b','c'));  // 当前路径往下拼接，输出：D:\WORKSPACE\LM_html\NG\Node\LEARN-NODE\03_内置模块\path\a\b\c

// console.log(path.dirname(process.cwd())); // 返回路径的所在文件夹的路径名

// console.log(path.dirname('/a/b/c'));  //返回路径的目录名

// console.log(path.basename('/a/b/c.js'));   // 输出c.js

// console.log(path.basename(__filename));  // 返回你当前运行文件的文件名    

// console.log(path.basename(__filename),'.js'); //打印当前文件的文件名和文件扩展名（.js）到控制台。它可以用于调试和查看当前文件的信息。

// console.log(path.extname(__filename));  // 输出文件的类型，这里是.js

// console.log(path.normalize('/a//b/c.js'));  // 帮你处理文件地址错误，比如多打了一个\，将路径格式化成标准的路径

// console.log(path.parse(__filename));  // 解析当前文件的信息，以对象的形式返回，
// 例如：{
//   root: 'D:\\',
//   dir: 'D:\\WORKSPACE\\LM_html\\NG\\Node\\LEARN-NODE\\03_内置模块\\path',
//   base: 'index.js',
//   ext: '.js',
//   name: 'index'
// }

console.log('foo\\bar\\baz'.split(path.sep)); // path.sep 默认以'\'切割，但Windows系统得打两个\\ 转义