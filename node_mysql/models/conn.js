/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-22 09:39:46
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-22 16:10:52
 */
const mysql = require('mysql')
// const config = require('../config/mysql')

const db = mysql.createConnection({
    // 主机地址
    host: '127.0.0.1',
    // 数据库的账号
    user: 'root',
    // 数据库的密码
    password: '123456',
    // 连接操作的数据库的名称
    database: 'node_test',
    // 连接超时时间 tcp
    connectTimeout: 10000
});

module.exports = sql => {
    return new Promise((resolve, reject) => {
        db.query(sql, (err, ret) => {
            if (!err) {
                resolve(ret)
            } else {
                reject(err)
            }
        })
    })
}