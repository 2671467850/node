/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-19 00:14:32
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-19 22:49:53
 */
const http = require('http')
const fs = require('fs')
const { join, extname } = require('path')
const mimes = require('./libs/mime')
const qs = require('querystring')
const url = require('url')
const path = require('path')

//设置网站的根目录
const webRoot = join(__dirname, 'www')

function fWriteFile(textPath, times) {
    fs.writeFileSync(textPath, times, {
        encoding: 'utf-8',
    }, err => { })
}

function fReadFile(textPath) {
    return fs.readFileSync(textPath, 'utf-8');
}
//设置cookie过期时间
const setCookieTiem = () => {
    let da = new Date()
    da.setTime(da.getTime() + 24 * 60 * 60 * 1000) //一天后过期
    return da.toUTCString()
}
http.createServer((req, res) => {
    let { pathname, query } = url.parse(req.url, true)

    // console.log(pathname)
    if (req.method === 'POST') {
        if (pathname == '/login') {
            let postData = [];
            req.on('data', buffer => { postData.push(buffer) })
            req.on('end', () => {
                //当数据传输完成后，获取密码数据
                // console.log(qs.parse(Buffer.concat(postData).toString()).password)
                let mima = qs.parse(Buffer.concat(postData).toString()).password;

                //定义文件名及其保存位置
                let userfile = qs.parse(Buffer.concat(postData).toString()).username;
                let textPath = path.join(webRoot, `data/${userfile}.txt`);
                let times = 1;

                res.setHeader('Content-Type', 'text/html;charset=utf-8');
                if (fs.existsSync(textPath)) {
                    let data = fReadFile(textPath);
                    data = parseInt(data)
                    // console.log(data)
                    res.setHeader('Set-Cookie', `times=${data};expires=${setCookieTiem()}`);
                    if (data >= 3) {
                        res.write(JSON.stringify({ code: 2, msg: '密码错误次数过多，明日再试' }))
                    } else {
                        if (mima == '123123') {
                            res.write(JSON.stringify({ code: 1, msg: '登录成功' }))
                        } else {
                            data += 1;
                            fWriteFile(textPath, data)
                            res.write(JSON.stringify({ code: 0, msg: '密码错误' }))
                        }
                    }
                } else {
                    fWriteFile(textPath, times)
                    res.write(JSON.stringify({ code: 5, msg: '账号文件创建成功' }))
                }
                res.end()
            })
        }
    } else {
        if (req.url != './favicon.ico') {
            pathname = pathname === '/' ? '/index.html' : pathname
            let filepath = join(webRoot, pathname)
            if (fs.existsSync(filepath)) {
                const ext = extname(filepath).slice(1);
                const mime = mimes[ext];
                res.setHeader('content-type', mime)
                let html;
                if (ext === 'html') {
                    html = fs.readFileSync(filepath, 'utf-8')
                    html = html.replace(/\{\{\s*(\w+)\s*\}\}/g, (preg, match) => {
                        return query[match]
                    })
                } else {
                    html = fs.readFileSync(filepath)
                }
                res.end(html)
            } else {
                res.statusCode = 404;
                //生成一个404网页
                res.end(fs.readFileSync(webRoot + '/404.html'))
            }
        }
    }

}).listen(3000, '0.0.0.0')
