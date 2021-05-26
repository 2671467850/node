/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-25 20:07:20
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-25 20:25:42
 */
const mongoose = require('../conn')
const md5 = require('md5')
// 定义Schema  集合的字段
const userSchema = new mongoose.Schema({
    //账号
    username: {
        type: String,
        minlength: 2,
        required: true,
        validate: {
            validator: function (value) {
                return value != 'admin'
            },
            message: '用户名不能为admin'
        }
    },
    password: {
        type: String,
        // 修改器
        set: function (v) {
            return md5(v)
        }
    },
    age: {
        type: Number,
        // 获取器
        get: v => {
            if (v >= 10) {
                // return '保密'
                return v;
            }
            return v;
        }
    },
    sex: {
        type: String,
        enum: ['先生', '女士'],
        default: '先生'
    }
}, {
    timestamps:
        { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = userSchema;