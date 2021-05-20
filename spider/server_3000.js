/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-20 08:22:31
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-20 09:23:19
 */
// 接口服务器,没有静态资源
const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

// 通过服务器完成网络请求
/* http.get('http://localhost:4000', res => {
  let jsonData = ''
  res.on('data', chunk => jsonData += chunk)
  res.on('end', () => {
    console.log(jsonData);
  })
}) */

// 网站根目录
const webRoot = path.join(__dirname, 'www')

http.createServer((req, res) => {
  // 得到pathname和get参数
  let { pathname, query: get } = url.parse(req.url, true)
  pathname = pathname == '/' ? '/index.html' : pathname
  if (pathname !== '/favicon.ico') {

    /* if ('/home' === pathname) {

      res.end(JSON.stringify({ code: 0, msg: '3000接口', data: { title: 'aaaa' } }))
      return;
    }
    */

    let filepath = path.join(webRoot, pathname)
    let ext = path.extname(pathname)
    // 针对于图片进行浏览器缓存
    if ('.jpg' === ext) {
      // 强缓存
      res.setHeader('expires', new Date(Date.now() + 3600 * 1000).toGMTString());
      res.setHeader('cache-control', 'max-age=3600');

      // 协商缓存
      // http1.0 last-modified=>服务器发给浏览器   浏览器给服务器请求中发字段:if-modified-since
      let stat = fs.statSync(filepath)
      // 当前文件的修改时间
      let mtime = new Date(stat.mtime).toGMTString()
      // 发送给客户端
      res.setHeader('last-modified', mtime)
      // 如果客户端发过来的协商缓存时间如果和文件修改时间一致，则返回304
      if (mtime == req.headers['if-modified-since']) {
        res.statusCode = 304;
        return res.end()
      }
      // http1.1 etag 通过给文件md5，进行比对
      const cnt = fs.readFileSync(filepath)
      const hash = crypto.createHash('md5').update(cnt).digest('base64')
      res.setHeader('etag', hash)
      if (hash == req.headers['if-none-match']) {
        res.statusCode = 304;
        return res.end()
      }
    }
    fs.createReadStream(filepath).pipe(res)
  }
}).listen(3000, '0.0.0.0')