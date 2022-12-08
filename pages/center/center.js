import CheckAuth from "../../util/auth"

// pages/center/center.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
    userInfo:""
    },
    handleTap(){
    //打开摄像头或者相册
    wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success:(res)=>{
          // tempFilePath可以作为 img 标签的 src 属性显示图片
          const tempFilePaths = res.tempFilePaths
          console.log(tempFilePaths)
          this.setData({
              userInfo:{
                  ...this.data.userInfo,
                  avatarUrl:tempFilePaths[0]
              }
          })
        //   防止编译后头像恢复，先保存在本地
          wx.setStorageSync('token',{
              ...wx.getStorageSync('token'),
            //   对老的token值展开，放上新的值
              avatarUrl:tempFilePaths[0]
          })
        }
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
        
        CheckAuth(()=>{
            console.log("显示购物车")
            this.setData({
                userInfo:wx.getStorageSync('token')
            })
        })
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