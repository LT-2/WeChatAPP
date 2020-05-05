// pages/enroll/enroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    phonenumber:"",
    password:"",
    passwordAck:""
  },

  // 跳转登录界面
  signin: function (e) {
    wx:wx.redirectTo({
      url: '/pages/login/login',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  // 注册
  regist: function(e){
    var that = this
    var myreg = /^1[3, 4, 5, 7, 8, 9]\d{9}/;
    if(that.data.username == '') {
      wx.showModal({
        title: '提示',
        content: '请输入用户名',
        showCancel:false,
        success(res) {
        }
      })
    } else if (that.data.phonenumber == '') {
      wx.showModal({
        title: '提示',
        content: '请输入手机号',
        showCancel: false,
        success(res) {
        }
      })
    } else if (!myreg.test(that.data.phonenumber)) {
      wx.showModal({
        title: '提示',
        content: '手机号输入不正确',
        showCancel: false,
        success(res) {
        }
      })
    } else if (that.data.password == '') {
      wx.showModal({
        title: '提示',
        content: '请输入登陆密码',
        showCancel: false,
        success(res) {
        }
      })
    } else if (that.data.password.length > 12 || that.data.password.length < 6) {
      wx.showModal({
        title: '提示',
        content: '请输入6-12位登陆密码',
        showCancel: false,
        success(res) {
        }
      })
    } else if (that.data.passwordAck == '') {
      wx.showModal({
        title: '提示',
        content: '请输入确认密码',
        showCancel: false,
        success(res) {
        }
      })
    } else if (that.data.password != that.data.passwordAck) {
      wx.showModal({
        title: '提示',
        content: '确认密码输入错误',
        showCancel: false,
        success(res) {
        }
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '账号注册成功',
        showCancel: false,
        success(res) {
        }
      })
    }
},

    

  // 获取用户名
  usernameInput: function (e) {
    this.data.username = e.detail.value
    // console.log(this.data.username)
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
  // 获取确认密码
  passwordInputAck: function (e) {
    this.data.passwordAck = e.detail.value
    // console.log(this.data.passwordAck)
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