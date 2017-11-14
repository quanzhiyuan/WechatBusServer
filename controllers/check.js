let notLogin = require('./code').notLogin
let login = require('./code').login
module.exports = {
  checkLogin: function checkLogin (req, res, next) {
    if (!req.session.user) {
      res.json(notLogin)
    }
    next()
  },
  checkNotLogin: function checkNotLogin (req, res, next) {
    if (req.session.user) {
     res.json(login) // 返回之前的页面
    }
    next()
  }
}
