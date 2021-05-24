/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-22 17:00:45
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-24 09:01:20
 */
const router = require('express').Router()
const {index,add,del} = require('../controller/userController')

router.get('/users',index)

router.post('/add',add)
router.post('/del',del)

module.exports = router