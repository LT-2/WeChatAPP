// pages/commit/commit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textvalue:''
  },

  send: function(e) {
    if(this.data.textvalue == ''){
      wx.showModal({
        title: '提示',
        content: '信息不能为空',
        showCancel:false,
        success(res) {
        }
      })
    }else{
      wx.showLoading({
        title: '加载中',
      })

      wx: wx.redirectTo({
        url: '/pages/mine/mine',
      })
    }

    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },

  // 获取文本
  bindTextvalue: function(e) {
    // console.log(e.detail.value)
    this.data.textvalue = e.detail.value
    // console.log(this.data.textvalue)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})