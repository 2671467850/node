/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-21 22:10:35
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-22 18:29:02
 */
const router = require('express').Router()

router.use('/admin',require('./loginRouter'))

router.use(require('../middleware/checkLoginMiddleware'))

router.use('/admin',require('./indexRouter'))

router.use('/admin',require('./userRouter'))


module.exports = router