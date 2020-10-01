// pages/home/home.js
Page({

  handleShowToast() {
    wx.showToast({
      title: '吼吼吼',
      duration: 3000,
      icon: 'loading',
      mask: true
    })
  },
  handleShowModal() {
    wx.showModal({
      title: '我的model',
      content: '我是内容',
      // showCancel:false,
      cancelText: '退出',
      success: function(res) {
        console.log(res);
        if(res.cancel) {
          console.log('取消按钮');
        }
        if(res.confirm) {
          console.log('确定按钮');
        }
      }
    })
  },
  handleShowLoading() {
    wx.showLoading({
      title: '加载',
      mask: true
    })
    setTimeout(() => {
      // 必须手动hideLoading才会让loading消失
      wx.hideLoading()
    },1000)
  },
  handleShowAction(){
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      itemColor: 'red',
      success: function(res){
        console.log(res.tapIndex);
        
      }
    })
  },

  onShareAppMessage: function(options){
    return {
      title: '你好',
      path: '/pages/about/about',
      imageUrl: ''
    }
  }
  
})