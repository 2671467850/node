/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-25 22:33:54
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-26 11:01:59
 */
const mongoose = require('../conn')
// 定义Schema  集合的字段
module.exports = new mongoose.Schema({
  title: String,
  date:String,
  pic: String,
  body: String
}, {
  timestamps: {
    createdAt: 'create_at',
    updatedAt: 'update_at'
  }
})