const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // 让浏览器以UTF-8编码显示数据
  res.setHeader('Content-Type', 'application/json', 'charset=utf8');
  
  if (req.url.startsWith('/movie')) {
    const data = fs.readFileSync('./data.json', 'utf8');
    res.end(data)
  }
})

server.listen(3000, () => {
  console.log('项目已在3000端口运行');
})