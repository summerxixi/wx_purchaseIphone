function CheckAuth(callback)
// 传一个回调函数，使用者的函数，如果成里使用回调函数
 {
    if (wx.getStorageSync('tel')) {
        // 处理业务 本地存储localstorage  判断手机号是否存在
        callback()
    } else {
        if (wx.getStorageSync('token')) {
            wx.navigateTo({
                url: '/pages/telform/telform',
                // 手机号绑定
            })
        } else {
            wx.navigateTo({
                url: '/pages/auth/auth',
            })
        }
    }
}

export default CheckAuth