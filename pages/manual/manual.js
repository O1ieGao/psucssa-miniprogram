// pages/blue/blue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },

  clickOnVisa() {
    wx.navigateTo({
      url: './beforeUS/visa/visa',
    })
  },

  clickOnFile() {
    wx.navigateTo({
      url: './beforeUS/file/file',
    })
  },
  
  clickOnPhysicalExamination() {
    wx.navigateTo({
      url: './beforeUS/physicalExamination/physicalExamination',
    })
  },
  
  clickOnDorm() {
    wx.navigateTo({
      url: './beforeUS/dorm/dorm',
    })
  },
  
  clickOnTool() {
    wx.navigateTo({
      url: './beforeUS/tool/tool',
    })
  },
  
  clickOnTransferCredit() {
    wx.navigateTo({
      url: './beforeUS/transferCredit/transferCredit',
    })
  },
  
  clickOnHonor() {
    wx.navigateTo({
      url: './beforeUS/honor/honor',
    })
  },
  
  clickOnTicket() {
    wx.navigateTo({
      url: './beforeUS/ticket/ticket',
    })
  },
  
  clickOnPrepareBeforeTravel() {
    wx.navigateTo({
      url: './beforeUS/prepareBeforeTravel/prepareBeforeTravel',
    })
  },

  
  clickOnPrepareBeforeTravel() {
    wx.navigateTo({
      url: './beforeUS/prepareBeforeTravel/prepareBeforeTravel',
    })
  },

  clickOnEat() {
    wx.navigateTo({
      url: './afterUS/eat/eat',
    })
  },

  clickOnComm() {
    wx.navigateTo({
      url: './afterUS/comm/comm',
    })
  },

  clickOnPrepareBeforeSchool() {
    wx.navigateTo({
      url: './afterUS/prepareBeforeSchool/prepareBeforeSchool',
    })
  },

  clickOnOrientation() {
    wx.navigateTo({
      url: './afterUS/ori/ori',
    })
  },

  clickOnTuition() {
    wx.navigateTo({
      url: './afterUS/tuition/tuition',
    })
  },

  clickOnCourseManual() {
    wx.navigateTo({
      url: './afterUS/corseManual/courseManual',
    })
  },

  clickOnFreshmanActivity() {
    wx.navigateTo({
      url: './afterUS/freshmanActivity/freshmanActivity',
    })
  },

})