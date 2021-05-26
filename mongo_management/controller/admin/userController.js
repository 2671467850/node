/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-25 21:45:43
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-26 08:25:49
 */
const userModel = require('../../db/model/userModel')

module.exports = {
    // 列表
    async index(req, res) {
        let data = await userModel.all()
        res.render('admin/user/index.html', { data })
    },
    // post接受
    async store(req, res) {
        // post数据接收
        let { username, sex, password ,age} = req.body
        postData = { username, sex, password ,age}
        // 添加数据之前先让session中存储数据
        req.session['adduser'] = postData;
        // 调用模型入库
        let ret = await userModel.store(postData)
        if (ret) {
            // 清空session中的数据
            req.session['adduser'] = null;
            delete req.session['adduser'];
            // 添加成功 返回到用户列表
            res.redirect('/admin/users/index')
        } else {
            res.redirect('/admin/users/index')
        }
        
    }
}