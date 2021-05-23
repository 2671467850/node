/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-20 20:59:19
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-20 21:10:47
 */
const admin = require('../models/loginModel')

const loginMiddleware = (req,res,next)=>{
    let {username,password} = req.body;
    if(username == admin[0].username && password == admin[0].password){
        next()
    }else{
        res.redirect('/login.html')
    }
}
module.exports = loginMiddleware