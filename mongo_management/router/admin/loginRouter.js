/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-25 20:38:28
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-27 08:52:25
 */
const router = require('express').Router()
const { index, login ,yzmdl} = require('../../controller/admin/loginController')


//登录页面
router.get('/login', index);

//验证码
router.get('/getCode', yzmdl)

router.post('/login', login)

module.exports = router;