/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-21 22:21:34
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-22 17:10:20
 */
const { checkUserLogin } = require('../models/userModel')

let loginMsg = [
    '',
    '登录或密码不正确',
    '请先登录，再访问',
    '欢迎再次登录'
]

module.exports = {

    index(req, res) {
        let msg = loginMsg[req.query.type]
        res.render('admin/login.html',{msg})
    },
    async login(req, res) {
        // 获取请求体中的账号密码
        let { username, password } = req.body
        // console.log(username, password)

        // let msg = loginMsg[req.query.type]
        // 使用数据模块验证
        let bool = await checkUserLogin(username, password)
        if (bool) {
            // 如果账号密码正确的话，设置session
            req.session['username'] = username
            // res.redirect('/admin/index')
            res.send({code:0,msg:loginMsg[0]})
        } else {
            res.send({code:1,msg:loginMsg[1]})
        }
    }
}