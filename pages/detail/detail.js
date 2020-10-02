// pages/detail/detail.js
Page({
  onLoad: function(options){
    console.log(options);
},
  onUnload: function() {
    // 1.首页的页面对象
    // getCurrentPage 当前所有的栈的页面
    const page = getCurrentPages()
    const home = page[page.length -2]

    // 2.调用页面对象的setData
    home.setData({
      title: '吼吼吼'
    })
  },
  handleBack() {
    wx.navigateBack({
      // 层级
      delta: 1
    })
  }
 
})