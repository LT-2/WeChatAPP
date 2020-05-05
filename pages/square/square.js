// pages/square/square.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    firco: "#000000",
    secco: "#979797 100%",
    list: [
      {
        face_url: "/images/add.png",
        username: "哆啦B梦",
        send_time: "2020-5-5 2:29",
        content: "你好！五月。 I like very spring,flower and brids, some perpor go wake street ",
        total_likes: 99,
      },
      {
        face_url: "/images/add.png",
        username: "哆啦AB梦",
        send_time: "2020-5-5 2:29",
        content: "你好！六月，万物翠笼，莺歌燕舞，我爱的人在何方，我知不道",
        total_likes: 100,
      },
      {
        face_url: "/images/add.png",
        username: "一帘幽梦",
        send_time: "2020-4-5 2:29",
        content: "你好！阳光",
        total_likes: 999,
      },
      {
        face_url: "/images/add.png",
        username: "哆啦AV梦",
        send_time: "2020-5-5 2:29",
        content: "你好！六月，万物翠笼，莺歌燕舞，我爱的人在何方，我知不道",
        total_likes: 100,
      },
    ]
  },

add: function(e) {
  wx:wx.navigateTo({
    url: '/pages/commit/commit',
    success: function(res) {},
    fail: function(res) {},
    complete: function(res) {},
  })
},
mytree: function(e) {
  wx: wx.navigateTo({
    url: '/pages/mine/mine',
    success: function(res) {},
    fail: function(res) {},
    complete: function(res) {},
  })
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