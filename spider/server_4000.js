/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-20 08:28:51
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-20 09:19:28
 */
// 接口服务器,没有静态资源
const http = require('http')
// 代理
const { createProxyMiddleware: proxy } = require('http-proxy-middleware')

http.createServer((req, res) => {
  // cors
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin)

  let proxyFn = proxy('/aaa', {
    // 请求的目标地址
    target: 'http://localhost:5000',
    // 取消客户请求过来的前缀
    pathRewrite: {
      '^/aaa': ''
    },
    // 修改代理请求到的服务器中的请求头中Host字段为本机字段
    // changeOrigin: true
  })
  proxyFn(req, res)


}).listen(4000, '0.0.0.0')