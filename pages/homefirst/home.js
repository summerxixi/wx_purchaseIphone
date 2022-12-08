import send_ret from '../../util/request'
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    handGet(){
    send_ret({
        url:'/users'
    }).then(res=>{
        console.log(res)
    })
    },
    handPost(){
    send_ret({
        // 显示加载过程
      url: '/users',
      method:"POST",
      data:{
          username:"Eva",
          password:"123"
      }
    }).then(res=>{
        console.log(res)
        // 加载后消失
    })
    },
    handPut(){
    send_ret({
      url: '/users/2',
      method:"patch",
      data:{
        username:"minmin11222",
        // password:"333"
      }
    }).then(res=>{
        console.log(res)
    })
    },
    handDelete(){
    send_ret({
      url: '/users/4',
      method:"DELETE"
    }).then(res=>{
        console.log(res)
    })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})