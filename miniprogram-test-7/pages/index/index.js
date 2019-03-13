Page({
  data: {
    tip: '结果',
    userName: '用户名：',
    psw: '密码：'
  },
  formBindsubmit: function (e) {
    this.setData({
      tip: '结果：微信号或微信登录密码错误',
      userName: '微信号：' + e.detail.value.userName,
      psw: '微信登陆密码：' + e.detail.value.psw
    })
  },
  formReset: function () {
    this.setData({
      tip: '其实账号密码没错只是水平有限，只有这个界面了。。。',
      userName: '',
      psw: ''
    })
  }
})
