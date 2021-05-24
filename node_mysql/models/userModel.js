/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-21 22:22:41
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-24 09:07:20
 */
const query = require('./conn')

module.exports = {

    async getUsers(){
        const sql = 'select * from users';
        return await query(sql)
    },
    async addUser(username, sex, password){
        // console.log(username, sex, password)
        const sql = `insert into users values (NULL,'${username}','${sex}','${password}')`;
        let result = await query(sql);
        // console.log(result);
    },
    async delUser(username, sex, password){
        // console.log(username, sex, password)
        const sql = `delete from users where username='${username}'`;
        let result = await query(sql);
        // console.log(result);
    },

    
    // 登录时账号密码验证
    async checkUserLogin(username,password){
        // 账号密码为空时，直接退出
        if(username == '' || password == '') return false;
        const sql = `select * from users where username='${username}' and password='${password}' `
        let data = await query(sql)
        if(data.length == 0) return false
        return true
    }
}