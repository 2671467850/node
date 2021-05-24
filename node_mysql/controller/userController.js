/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-22 17:11:09
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-24 09:01:52
 */
const {getUsers,addUser,delUser} = require('../models/userModel')
module.exports = {
    async index(req,res){
        let data = await getUsers()
        res.render('admin/showlist.html',{data})
    },
    async add(req,res){
        let { username, sex, password } = req.body
        let data = await addUser(username, sex, password)
        // res.redirect('admin/showlist.html')
    },
    async del(req,res){
        let { username, sex, password } = req.body
        let data = await delUser(username, sex, password)
        // res.redirect('admin/showlist.html')
    }
}