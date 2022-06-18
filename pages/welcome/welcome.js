// index.js
Page({
  onLoad: function () {
    console.log("page onLoad")
  },
  onReady: function () {
    console.log("page onReady")
  },
  onShow: function () {
    console.log("page onShow")
  },
  onHide: function () {
    console.log("page onHide")
  },
  onUnload: function () {
    console.log("page onUnload")
  },
  clickOnManual: function () {
    wx.navigateTo({
      url: '../manual/manual',
    })
  },
  clickOnMajorWiki: function () {
    wx.navigateTo({
      url: '../majorWiki/majorWiki',
    })
  }
})
