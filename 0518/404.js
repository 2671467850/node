/*
 * @Descripttion: 404页面处理
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-18 19:26:38
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-18 21:11:52
 */
const http = require('http')
const fs = require('fs')
const { join ,extname} = require('path')
const mimes = require('./libs/mime')

//设置网站的根目录
const webRoot = join(__dirname,'www')
http.createServer((req,res)=>{
    if(req.url != './favicon.ico'){
        //如果没有请求地址，默认为主页
        let pathname = req.url === '/' ? 'index.html' : req.url;
        //将请求地址与服务器根目录拼接
        let filepath = join(webRoot,pathname)
        //判断文件是都存在，如果不存在则返回404页面
        if(fs.existsSync(filepath)){

            //得到请求文件的扩展名
            const ext = extname(filepath).slice(1)
            //得到扩展名
            const mime = mimes[ext];

            //为资源设置响应头
            res.setHeader('content-type',mime)

            res.end(fs.readFileSync(filepath))
        }else{
            //如果没有请求地址对应的网页，设置状态码为404
            res.statusCode = 404;
            //生成一个404网页
            res.end(fs.readFileSync(webRoot + '/404.html'))
        }
    }
}).listen(3000,'0.0.0.0')