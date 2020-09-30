// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles: ['衣服', '帽子','鞋子']

  },

  handleBtnClick(){
    console.log('222');
  },

  handleItemClick(event){
    console.log(event);
    // title-  index
    const dataset = event.currentTarget.dataset;
    const title = dataset.index;
    console.log(title);
    
    

  }

  
})