// 应用
// page()得到一个页面
App({
globalData:{
   
},

onLaunch(){
// console.log('app is online');
// 在应用启动的时候发送接口请求
wx.request({
    // 发送远程请求
  url: 'https://resources.ninghao.net/wxapp-case/db.json',
  success:(response)=>{
    //   console.log(response);
    Object.assign(this.globalData,
        response.data)
        // console.log(this,'-----');
}
})
}
})