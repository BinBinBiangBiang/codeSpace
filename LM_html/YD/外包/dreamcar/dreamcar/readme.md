# 小程序业务架构

- APP和page的概念
    - App是全局的，page是共享的
    app.js 共享（globalData）
    app.wxss样式
    app.JSON应用的配置

- globalData如何来到page中
    - const app = getApp()拿到全局里的应用对象
    - data初始化一个数据的占位符
    {
        data{
            user：{}//空的
        }
    }

- 生命周期
    数据来自于后端接口
    onLoad wxml + wxss 页面显示了
    这是请求数据的最佳时机
    - this.setData({
        user:真正的值
    })
    - 拿到数据之后页面会热更新，重新绘制{{}}里面的内容

- 循环输出的概念
    - 模板在{{直出}}外，数组列表输出的常态
    - block 只承载指令wx：for
      不会出现在文档流中
    - item 默认
      item.image

- CSS 架构思路

Dry原则（don't repeat yourself）
    - app.wxss负责全局样式
        - 这里是公用的样式
        - 可以模块化
    - page.wxss负责页面业务样式