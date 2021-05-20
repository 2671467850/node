/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-20 22:12:17
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-20 22:24:58
 */
const router = require('express').Router()
const outMiddleware = require('../middleware/outMiddleware')

router.get('/logout',outMiddleware)

module.exports = router