// pages/auth/auth.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
  handleAuth(){
    wx.getUserProfile({
        desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
        console.log(res)
        wx.setStorageSync('token',res.userInfo)
        wx.navigateTo({
          url: '/pages/telform/telform',
        })
        }
      })
  }
   
})