/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-25 19:13:54
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-25 21:03:07
 */
const express = require('express')
const cs = require('cookie-session')
const path = require("path")

const app = express()
app.listen(3000,'0.0.0.0',()=>{
    console.log('3000服务启动')
})

// 暴露静态资源
app.use(express.static('public'))

// post 接收
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// Session加密保存
app.use(cs({
    name:'sessionid',
    secret: 'sdaskjhfsedjkgasedhjgfdshujged'
}))

// 模板引擎管理
app.engine('html',require('express-art-template'))
app.set('views',path.join(__dirname,'views'))

// 路由管理
app.use(require('./router'))

// 404页面
app.use((req,res)=>{
    res.status(404).render('404.html')
})