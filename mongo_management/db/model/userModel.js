/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-25 20:31:47
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-25 21:54:07
 */
const userSchema = require('../schema/userSchema')
const BaseModel = require('./baseModel')

class UserModel extends BaseModel {
    constructor() {
        super('users', userSchema)
    }
    // 查询账号和密码是否正确
    async checkUserLogin(username, password) {
        return await this.one({ username, password })
    }
}

module.exports = new UserModel;