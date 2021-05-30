/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-25 20:43:35
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-27 08:52:47
 */
const userModel = require('../../db/model/userModel')
const svgCaptcha = require("svg-captcha")

module.exports = {
    index(req, res) {
        res.render('admin/login/index.html')
    },
    yzmdl(req, res) {
        let codeConfig = {
            size: 4,// 验证码长度
            ignoreChars: '0o1i', // 验证码字符中排除 0o1i
            noise: 2, // 干扰线条的数量
            fontSize: 42,
            color: true,//开启文字颜色
            background: "#cc9966",//背景色
            width: 150,
            height: 44
        }
        const captcha = svgCaptcha.create(codeConfig);

        req.session.captcha = captcha.text.toLowerCase(); //存session用于验证接口获取文字码
        // console.log(req.session.captcha)
        let codeData = {
            img: captcha.data
        }
        // console.log(codeData)
        res.type('svg');
        res.status(200).send(captcha.data);
    },
    async login(req, res) {
        let { username, password, yzm } = req.body;
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
        if (yzm == '' || yzm != req.session.captcha) {
            res.send({
                code: 1003,
                msg: '请填写正确验证码',
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