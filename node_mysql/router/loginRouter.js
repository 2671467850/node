/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-21 22:13:26
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-22 15:58:01
 */
const router = require('express').Router()
const {index, login } = require('../controller/loginController')

router.get('/login',index)
router.post('/login',login)

module.exports = router