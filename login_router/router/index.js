/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-20 20:24:02
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-20 22:12:45
 */

const express = require('express')
const router = require('express').Router()
const cookieSession = require('cookie-session')

// session
router.use(cookieSession({
    name: 'sessionid',
    secret: 'fewfewfewklfjekfjelwfelwfewlfjekfewlfjewfewllfeejflw'
}))

// post接受
router.use(express.urlencoded({ extended: false }))
router.use(express.json())

// 登录
router.use(require('./loginRouter'))
// 后台页
router.use(require('./adminRouter'))
//注销
router.use(require('./logoutRouter'))

module.exports = router