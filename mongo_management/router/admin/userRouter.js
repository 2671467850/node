/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-25 21:31:10
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-25 22:17:06
 */
const router = require('express').Router()
const { index, add, store, pages } = require('../../controller/admin/userController')

// 列表
router.get('/index', index);
// // 分页数据
// router.get('/pages', pages);
// // 添加显示
// router.get('/add', add);
// 添加处理
router.post('/add', store);


module.exports = router