// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type:Array,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0,
    count: 0

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemClick(event){
      // 1.取出index
      const index = event.currentTarget.dataset.index;

      // 修改currentIndex
      this.setData({
        currentIndex: index
      })

      // 3.通知页面的点击事件
      this.triggerEvent('itemclick',{index,title: this.properties.titles[index]},{})
    
    },

    increment(num) {
      this.setData({
        count: this.data.count + num
      })
    }
  },

  // 外界给组件传入的额外样式
  externalClasses: [],

  // 可以监听Properties/data的改变
  observers: {
    count: function(newVal) {
      console.log(newVal);
    }
  },

  // -----组件监听生命周期

  // 1. 组件监听所在页面的生命周期
  pageLifetimes: {
    show() {
      console.log("监听组件所在页面显示出来的");
    },
    hide() {
      console.log("监听组件所在页面隐藏起来的");
    },
    resize() {
      console.log('监听页面大小的改变');
      
    }
  },

  // 2. 监听组件本身的生命周期

  lifetimes: {
    created() {
      console.log('被创建出来');
    },
    attached() {
      console.log('被添加到页面');
    },
    ready() {
      console.log('被渲染出来');
    },
    moved() {
      console.log('被移动另一个节点');
    },
    detached() {
      console.log('被销毁');
      
    }
  }

})
