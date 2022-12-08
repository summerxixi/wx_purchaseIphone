// pages/searchlist/searchlist.js
const { default: request } = require("../../util/request")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goodList: []
    },
    priceOrder: true,
    commentOrder: true,
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log(options)
        wx.setNavigationBarTitle({
            title: options.name
        })
        this.getList(options.id)

    },
    getList(id) {
        request({
            url: `/categories/${id}?_embed=goods`
        }).then(res => {
            console.log(res.goods)
            this.setData({
                goodList: res.goods
            })
        })
    },


    handleTap(evt) {
        wx.navigateTo({
            url: `/pages/detail/detail?id=${evt.currentTarget.dataset.id}
            &name=${evt.currentTarget.dataset.name}`,
        })
    },

    handlePrice() {

        this.priceOrder = !this.priceOrder
        console.log("价格排序", this.priceOrder)
        this.setData({
            goodList: this.priceOrder ? this.data.goodList.sort((item1, item2) => item1.price - item2.price) : this.data.goodList.sort((item1, item2) => item2.price - item1.price)
        })
    },

    handleComment() {
        this.commentOrder = !this.commentOrder

        this.setData({
            goodList: this.commentOrder ? this.data.goodList.sort((item1, item2) => parseInt(item1.goodcomment) - parseInt(item2.goodcomment)) : this.data.goodList.sort((item1, item2) => parseInt(item2.goodcomment) - parseInt(item1.goodcomment))
        })
    }
   
})