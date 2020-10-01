const TOKEN = 'token'
App({
  // 对象：小程序关闭
  globalData: {
    token: ''
  },
  onLaunch: function() {
// 1.先从缓冲中取出token
const token = wx.getStorageSync(TOKEN)

// 1.判断token是否有值
if(token && token.length !==0) {
  // 已经有token，需要验证是否过期
  this.check_token(token)
}else{
  // 没有token，进行login
  this.login()
}  
  },
  check_token(token) {
  wx.request({
    // 验证的
    url: '',
    method: 'post',
    header: {
      token
    },
    success: function(res) {
      // console.log(res);
      if(!res.data.errCode) {
        this.globalData.token = token;
      }else {
        this.login()
      }
    },
    fail: function(err){
     console.log(err);
     
    }
  })
  },

  login() {
     // 登录操作
    wx.login({
      // code 只有五分钟
      success: function(res) {
        // 1.获取code
        const code = res.code;
     
        // 2.将code发送到我们的服务器
        wx.request({
          url:'',
          method: 'post',
          data: {
            code: code
          },
          success:function(res){
            // console.log(res);
            // 1. 取出token
            const token = res.data.token;

            // 2.将token保存在globalData中
            this.globalData.token = token;

            // 3.进行本地存储
            wx.setStorageSync(TOKEN,token)
          }
        })
      }
    })
  }
})
