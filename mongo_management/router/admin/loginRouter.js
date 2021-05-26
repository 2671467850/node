/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-25 20:38:28
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-25 21:18:16
 */
const router = require('express').Router()
const {index,login} = require('../../controller/admin/loginController')

//登录页面
router.get('/login',index);

router.post('/login',login)

module.exports = router;