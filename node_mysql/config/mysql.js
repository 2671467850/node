/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-22 09:46:44
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-22 09:47:14
 */
let config;
if (process.env.NDOE_ENV == 'dev') {
    // 开发环境
    config = {
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
    }
} else {
    // 上线
    config = {
        // 主机地址
        host: '10.2.22.30',
        // 数据库的账号
        user: 'ejfklewjlfwe',
        // 数据库的密码
        password: 'xfewfwefwfew',
        // 连接操作的数据库的名称
        database: 'users',
        // 连接超时时间 tcp
        connectTimeout: 10000
    }
}
module.exports = config;