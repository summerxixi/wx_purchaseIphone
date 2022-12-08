import request from "../../util/request"

// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
    looplist:[],
    goodslist:[]
    },
    current:1,
    total:0,

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady:function(){
    this.renderSwiper(),
    this.renderGoods()
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
// 下拉刷新
     setTimeout(()=>{
        wx.stopPullDownRefresh()
     },1000)
    
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        // this.data.goodslist===总数居长度
        console.log(this.data.goodslist.length,this.total)
    if(this.data.goodslist.length===this.total){
        return 
    }
    console.log("到底了")
    this.current++,
    this.renderGoods()
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },
    renderSwiper(){
        request({
        url:'/recommends'
        }).then(res=>{
            console.log(res)
            this.setData({
                 looplist:res
            })
        })
    },
    renderGoods(){
        request({
            // url:`localhost:8080/api/auth/login`
             url:`/goods?_page=${this.current}&_limit=5`
        },true).then(res=>{
            console.log(res)
            // 传过来的是字符16，需要进行转换
            this.total=Number(res.total)
            this.setData({
                goodslist:[...this.data.goodslist,...res.list]
            })
        })
    },
    
    // 跳转到搜索页面
    handleEvent(){
    console.log('deal')
    wx.navigateTo({
      url: '/pages/search/search',
    })
    },
    handChangepage(evt){
        // wx.redirectTo
        // wx.switchTab
        var id=evt.currentTarget.dataset.id
        // 使用data.name接受的，不用title
        var name=evt.currentTarget.dataset.name
        wx.navigateTo({
          url: `/pages/detail/detail?id=${id}&name=${name}`,
        })
    }
})