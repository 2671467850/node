/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-20 20:26:09
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-20 21:38:37
 */
const router = require('express').Router()
const check = require('../middleware/check')

router.use('/admin',check)

module.exports = router