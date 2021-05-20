/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-19 21:59:09
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-20 09:06:08
 */
const https = require('https')
const http = require('http')
const cheerio = require('cheerio')
const path = require('path')
const fs = require('fs')
const os = require('os')

const dirpath = path.join(__dirname, 'images')
const logpath = path.join(__dirname, 'data/jdshop.log')
const url = 'https://list.jd.com/list.html?cat=9987,653,655'

function fWriteFile(logpath, data) {
    fs.writeFileSync(logpath, data, {
        encoding: 'utf-8',
        flag:'a'
    }, err => { })
}

let infoarr = [];
let imgarr = [];
let pricearr = [];

https.get(url, res => {

    let html = ''
    res.on('data', chunk => html += chunk)
    res.on('end', () => {
        // 把当前html内容，使用cheerio来完成选择加载s
        const $ = cheerio.load(html)
        const divs = $('#J_goodsList>.gl-warp>.gl-item>.gl-i-wrap')

        divs.each((index, el) => {
            let info = $(el).find('.p-name em').text()
            let img = 'https:' + $(el).find('.p-img img').attr('data-lazy-img')
            let price = $(el).find('.p-price i').text()
            // console.log(info)
            // console.log(img)
            // console.log(price)
            if (info && img && price) {
                infoarr.push(info);
                imgarr.push(img);
                pricearr.push(price);
                https.get(img, ret => {
                    let name = path.basename(img)
                    ret.pipe(fs.createWriteStream(dirpath + '/' + name))
                    let str = dirpath + '/' + name + "  " + info + "  " + price + os.EOL
                    fWriteFile(logpath,str);
                })
            }
        })
    })
})
getObj()
let shopobj={};
function getObj(){
    infoarr.forEach((item,index)=>{
        shopobj.data.push({info:item,imgurl:imgarr[index],price:pricearr[index]});
    })
}
https.createServer((req, res) => {
    console.log(req.headers);
    // 得到pathname和get参数
    let { pathname, query: get } = url.parse(req.url, true)
    // 接口一般都是返回json,所以统一设置
    res.setHeader('content-type', 'application/json;charset=utf-8')
    if (pathname !== '/favicon.ico') {
      if ('/users' === pathname) {
        res.end(JSON.stringify(shopobj))
      } else if ('/login' === pathname) {
        res.end(JSON.stringify(shopobj))
      } else {
        res.end(JSON.stringify(shopobj))
      }
    }
  }).listen(5000, '0.0.0.0')