// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath: ''
  },
  handleChooseAlbum() {
    // 系统的API，让用户在相册中选者图片（）
    wx.chooseImage({
      success: (res) => {
        // console.log(res);
        // 1.取出路径
        const path = res.tempFilePaths[0]
        // 2.设置imagePath
        this.setData({
          imagePath:path
        })
      }
    })
  }

  
})