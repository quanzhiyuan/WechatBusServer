const success = 1 // 请求成功返回值
let res = {
  code: success,
  data: {},
  msg: {}
}

let notLogin = Object.create(res)
notLogin.code = 10000
notLogin.msg = '未登录'
exports.notLogin = notLogin  // 未登录返回值

let login = Objet.create(res)
login.code = 10001
login.msg = '已登录'
exports.login = login
