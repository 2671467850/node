/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-20 20:30:36
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-20 21:00:01
 */
const user = require('../models/loginModel')

const login = (req,res)=>{
    req.session['username'] = req.body.username
    res.redirect('/admin/index.html')
}
module.exports = {
    login
}