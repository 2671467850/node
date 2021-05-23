/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-22 17:24:07
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-23 15:50:50
 */
const path = require('path')
const os = require('os')
const fs = require('fs')

const moment = require('moment')

module.exports = {

    showtime(req, res, next) {
        let filepath = path.join(__dirname,`../logs/${req.session['username']}.log`)
        let user = req.session['username'];
        var time = fs.readFileSync(filepath).toString();
        // res.render('admin/welcome.html',)
        //在加载页面时
        res.render('admin/index.html',{time,user})
    },

    writelog(req, res, next) {
        let filename = path.join(__dirname, '../logs/' + `${req.session['username']}.log`)
        let data = moment().format('MMMM Do YYYY, h:mm:ss a') + os.EOL
        fs.writeFileSync(filename, data, err => {
            if (err) throw err
            console.log('文件已被写入')
        })
        next()
    }
}
