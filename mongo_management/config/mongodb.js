/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-25 19:57:45
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-25 20:30:11
 */
let config;
if (process.env.NODE_ENV == 'dev') {
    config = {
        connect: 'mongodb://localhost:27017/test'
    }
} else {
    config = {
        connect: 'mongodb://localhost:27017/gp23'
    }
}

module.exports = config