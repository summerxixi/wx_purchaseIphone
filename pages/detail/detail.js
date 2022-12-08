import CheckAuth from "../../util/auth"
import request from "../../util/request"

// pages/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
    info:null,
    current:0,
    commentList:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
    console.log(options)
    wx.setNavigationBarTitle({
      title: options.name,
    })
    this.getDetailInfo(options.id)
    this.getComments()
    // 获取id对应的商品列表
    },


    getDetailInfo(id){
    request({
        url:`/goods/${id}`
    }).then(res=>{
        console.log(res)
        this.setData({
        info:res
        })
    })
    },

    getComments(){
        request({
        url:"/comments"
        }).then(res=>{
            console.log(res)
            this.setData({
                commentList:res
            })
        })
    },

    handleTap(evt){
        console.log(evt.currentTarget)
        wx.previewImage({
        current: evt.currentTarget.dataset.current, // 当前显示图片的 http 链接
        urls: this.data.info.slides.map(item=>`http://localhost:5000${item}`) // 需要预览的图片 http 链接列表
          })
    },
    handleActive(evt){
    this.setData({
        current:evt.currentTarget.dataset.index
    })
    },
    handleAdd() {
        //  console.log("add")
    
        /*
          1. 判断本地存储是否有手机号信息，如果有直接加入
          2. 没有手机号，判断是否有token信息，如果有，引导调整手机号绑定
          3 没有token授权信息， 我们引导用户授权页面
        */
       CheckAuth(()=>{
           console.log("准备加入购物车")
        //    wx.navigateTo({
        //      url: '/pages/auth/auth',
             
        //    })
       })
    }
})