// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phonenumber:"",
    password:"",
  },
  // 登录界面验证和跳转
  logining:function(e){
    console.log(this.data.phonenumber)
    if (this.data.phonenumber == ''){
      wx.showModal({
        title: '提示',
        content: '输入手机号错误',
        success(res) {
        }
      })
    } else if (this.data.password == ''){
      wx.showModal({
        title: '提示',
        content: '输入密码错误',
        success(res) {
        }
      })
    } else {
      wx: wx.redirectTo({
        url: '/pages/square/square',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
  },
  // 跳转注册界面
  signin: function(e) {
    wx: wx.redirectTo({
      url: '/pages/enroll/enroll',
    })
  },

  // 获取手机号
  phonenumberInput: function (e) {
    this.data.phonenumber = e.detail.value
    // console.log(this.data.phonenumber)
  },
  // 获取密码
  passwordInput: function (e) {
    this.data.password = e.detail.value
    // console.log(this.data.password)
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