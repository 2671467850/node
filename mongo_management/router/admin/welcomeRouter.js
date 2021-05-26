/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-25 21:32:29
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-25 21:33:48
 */
const router = require('express').Router()
const { index,welcome,logout } = require('../../controller/admin/welcomeController')

// 后台首页
router.get('/index', index);
router.get('/welcome', welcome);
router.get('/logout', logout);


module.exports = router