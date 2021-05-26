/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-25 20:37:17
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-25 22:31:18
 */
const router = require('express').Router()

router.use('/admin',require('./loginRouter'));

router.use(require('../../middleware/loginMiddleware'))

router.use('/admin/users', require('./userRouter'))
router.use('/admin/film', require('./filmRouter'))

router.use('/admin', require('./welcomeRouter'))


module.exports = router