/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-22 17:00:45
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-23 18:30:07
 */
const router = require('express').Router()
const {index,add} = require('../controller/userController')

router.get('/users',index)

router.post('/add',add)

module.exports = router