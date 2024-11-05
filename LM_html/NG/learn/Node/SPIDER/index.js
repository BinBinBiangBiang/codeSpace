const cheerio = require('cheerio');
const https = require('https')
const fs = require('fs');  // 文件操作模块

// cheerio: 一个用于在服务器上实现jQuery核心功能的快速、灵活和精简的库。
// https: 用于发起HTTPS请求的Node.js模块。
// fs: 用于文件系统操作的Node.js模块。



// 发起了一个HTTPS GET请求，目标是豆瓣电影Top 250页面。响应通过回调函数进行处理。
https.get('https://movie.douban.com/top250', (res) => {
  let html = ''
  // 处理响应数据
  res.on('data', (chunk) => {  // 监听数据的读取
    // console.log(chunk.toString());
    html += chunk;
  })

  // 使用cheerio 解析HTML
  res.on('end', () => {  // 源代码获取完毕
    // document.getElementById等等在node中是不可用的，node有自己的库（cheerio）
    // console.log(html);
    const $ = cheerio.load(html)
    const result = []

    $('li .item').each(function () {
      // 使用Cheerio选择器从页面上的每个电影条目中提取信息。提取的信息包括电影标题、评分和图片URL。数据被推送到result数组中。
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
    // 将数据写入文件中
    fs.writeFile('./list.json', JSON.stringify(result), (err, data) => {
      if (err) {
        throw err;
      }
      console.log('文件写入成功');
    })
  })
})