/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-18 21:52:56
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-18 23:19:38
 */
const { join, extname } = require('path')
const fs = require('fs')
const http = require('http')
// const { createGzip } = require('zlib')
const url = require('url')
const qs = require('querystring')
const mimes = require('./libs/mime')

// 网站根目录  url地址中的 / => www目录
const webRoot = join(__dirname, 'www')

// get数据获取
http.createServer((req, res) => {
    let { pathname, query } = url.parse(req.url, true)
    // post处理
    if (req.method === 'POST') {
        let data = new Date(Date.now() + 1*1000*60*60*24).toUTCString()
        // 路由 post登录处理  流
        if (pathname == '/upload') {
            // 文件名称
            let filename = Date.now() + extname(req.headers.filename);
            // 实现文件上传
            req.pipe(fs.createWriteStream(join(webRoot, 'uploads', filename)))
            //缓存时间
            res.setHeader('expires', data)
            res.end(JSON.stringify({ code: 0, url: 'http://localhost:3000/uploads/' + filename ,data:data}))
        }else if(pathname == '/delete'){
            fs.unlink(join(webRoot, 'uploads',req.headers.filename), err => {
                res.end(JSON.stringify({ code: 0, url: ''}))
            })
        }

    } else {
        if (req.url != '/favicon.ico') {
            // query，就是浏览器访问的get参数集合
            pathname = pathname === '/' ? '/index.html' : pathname
            // 得到请求的对象服务器中真实的文件路径
            let filepath = join(webRoot, pathname)

            if (fs.existsSync(filepath)) {
                // 得到请求文件的扩展名
                const ext = extname(filepath).slice(1)
                // 得到扩展名
                const mime = mimes[ext]
                // 设置响应头
                res.setHeader('content-type', mime)
                // res.setHeader('Content-Encoding', 'gzip')
                let html;
                if ('html' === ext) {
                    html = fs.readFileSync(filepath, 'utf-8');
                    // html = html.replace('{{id}}', query.id)
                    html = html.replace(/\{\{\s*(\w+)\s*\}\}/g, (preg, match) => {
                        return query[match]
                    })
                } else {
                    html = fs.readFileSync(filepath)
                }
                res.end(html)
                // fs.createReadStream(filepath).pipe(createGzip()).pipe(res)
            } else {
                res.statusCode = 404;
                //生成一个404网页
                res.end(fs.readFileSync(webRoot + '/404.html'))
            }
        }
    }
}).listen(3000, '0.0.0.0')