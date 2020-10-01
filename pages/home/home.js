// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0

  },

  handleInea(){
    // console.log('00000');
    this.setData({
      count: this.data.count + 1
    })
    
  },
  handleTabClick(event) {
    console.log(event);
    
  },

  handleIncr(){
    // 通过组件对象来修改
    const my_sel = this.selectComponent('.sel')

    // my_sel.setData({
    //   count: my_sel.data.count + 20
    // })

    // 通过方法修改
    my_sel.increment(10)
  }


  

  
 
})