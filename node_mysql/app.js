/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-21 21:54:33
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-23 17:19:17
 */
const express = require('express')
const app = express()
const cs = require('cookie-session')
const path = require('path')
const cros = require('cors')

app.listen(3000,"0.0.0.0",() => {
    console.log('3000--->服务已启动')
})
// app.use(cros())
// 处理post请求
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// session加密保存
app.use(cs({
    name: 'sessionid',
    secret: 'dshklfghsdfgshjegfyudsjkgf'
}))

app.use(express.static(path.join(__dirname, 'public')));

// 模板引擎配置
app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, 'views'))

// 总路由引入
app.use(require('./router'))

// 404页面处理
// 放在最后，当所有路由都没通过再跳转到404
app.use((req,res)=>{
    res.status(404).render('404.html')
})


