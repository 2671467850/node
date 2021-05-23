/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-20 20:25:57
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-20 22:15:14
 */
const router = require('express').Router()
const loginMiddleware = require('../middleware/loginMiddlerware')
const {login} = require('../controllers/loginController')



router.post('/login',loginMiddleware,login)


module.exports = router