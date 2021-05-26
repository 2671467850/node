/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-25 20:43:35
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-26 11:12:08
 */
const userModel = require('../../db/model/userModel')

module.exports = {
    index(req, res) {
        res.render('admin/login/index.html')
    },
    async login(req, res) {
        let { username, password } = req.body;
        // console.log(username,password)
        if (username == '' || password == '') {
            // 不用继续了
            // return false;
            res.send({
                code: 1001,
                msg: '账号或密码为空',
                data: null
            })
            return;
        }
        // 进行数据库查询
        let userinfo = await userModel.checkUserLogin(username, password)
        if (!userinfo) {
            res.send({
                code: 1002,
                msg: '账号或密码错误',
                data: null
            })
            return;
        }
        // 登录成功
        // 写入session,保持登录状态
        req.session['username'] = username

        res.send({
            code: 0,
            msg: 'ok',
            data: userinfo
        })
    }
}