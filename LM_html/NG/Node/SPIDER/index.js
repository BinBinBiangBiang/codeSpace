const cheerio = require('cheerio');
const https = require('https')
const fs = require('fs');  // 文件操作模块

https.get('https://movie.douban.com/top250', (res) => {
  let html = ''
  res.on('data', (chunk) => {  // 监听数据的读取
    // console.log(chunk.toString());
    html += chunk;
  })

  res.on('end', () => {  // 源代码获取完毕
    // document.getElementById等等在node中是不可用的，node有自己的库（cheerio）
    // console.log(html);
    const $ = cheerio.load(html)
    const result = []

    $('li .item').each(function () {
      const title = $('.info .title', this).text()
      const star = $('.info .bd .rating_num', this).text()
      const pic = $('.pic img', this).attr('src')
      result.push(
        {
          title,
          star,
          pic
        }
      )
    })

    // console.log(result);
    fs.writeFile('./list.json', JSON.stringify(result), (err, data) => {
      if (err) {
        throw err;
      }
      console.log('文件写入成功');
    })
  })
})