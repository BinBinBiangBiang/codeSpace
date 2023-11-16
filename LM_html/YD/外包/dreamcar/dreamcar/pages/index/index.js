// 需要拿到app.js的内容
// 微信提供应用对象
const app =  getApp()
Page({
    // 页面的数据
    data:{
        // user:{
        slides:null,
        entities:null
        },
    onLoad(){
        // 生命周期
        // console.log(app,'页面显示了');
        // 响应式页面
        setTimeout(() => {
 this.setData({
            slides:app.globalData.slides,
            entities:app.globalData.vehicles
        })
        },2000)
       
    },
    onReady(){
        console.log('ready go');
    }
})