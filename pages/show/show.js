Page({
  data: {
    replies: [],
    topic: {},
  },
  onLoad: function (options) {
    this.getTopics(options.id);
    // <- 这里
    this.getReplies(options.id);
  },
  getTopics: function (id) {
    wx.request({
      url: 'https://www.v2ex.com/api/topics/show.json?id=' + id,
      success: (res) => {
        this.setData({
          topic: res.data[0],
        })
      }
    })
  },
  // <- 这里
  getReplies: function (id) {
    wx.request({
      url: 'https://www.v2ex.com/api/replies/show.json?topic_id=' + id,
      success: (res) => {
        // console.log(res.data);
        // 点击开其中一项发现，没有 title 属性，内容在 content 属性中。
        this.setData({
          replies: res.data,
        })
      }
    })
  }
})