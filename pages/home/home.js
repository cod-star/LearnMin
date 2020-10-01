// pages/home/home.js
import request from '../../service/network.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 发送网络请求
    // 1. 原生的
    // wx.request({
    //   url: 'url',
    //   data: {
    //     // get请求，但是携带请求参数
    //     type:"sell",
    //     page: 1
    //   },
    //   success: function(res) {
    //   }
    // })
    // post请求，并且携带参数

    // 2. 使用封装的
    // promise最大的好处是为了防止出现回调函数
    request({
      url: '',
    }).then(res => {
      // console.log(res);
    }).catch(err => {
      // console.log(err);
    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})