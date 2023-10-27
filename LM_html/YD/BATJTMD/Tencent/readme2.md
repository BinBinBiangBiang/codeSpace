# 企业级界面开发规则

- html css js 功能分离
- css 架构
  - reset.css
    去除浏览器间的样式差别，无差别页面显示
    box-sizing 盒子大小的计算方式
    浏览器好多家，为了保证用户的体验感，通常需要重新
    文档流 body开始
    盒子在页面上占了多少呢？
    标准盒子模型 = content + padding + border + margin
    2种盒子模型
    IE盒模型 = content(自动缩放) + padding + border + margin
  - base.css 通用样式

- css命名套路
    - page
        __hd __bd __ft
    - btn pannel cell
    - 框架组件 BEM

- css + -> 兄弟选择器
- google 图片格式
    base64 图片 小一点简单的  google推出的base64可以直接写在css文件里 
    图片格式：jpg|png|jepg|wtt|webp 比较大 导致带来请求的并发 浏览器速度就慢