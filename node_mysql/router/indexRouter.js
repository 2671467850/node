/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-21 22:42:44
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-23 15:45:33
 */
const router = require('express').Router()
const {index, welcome, logout} = require('../controller/indexController')
const {showtime,writelog} = require('../middleware/userLogMiddleware')

router.get('/index',showtime)
router.get('/welcome',welcome)
//退出系统时，记录时间
router.get('/logout',writelog,logout)

module.exports = router