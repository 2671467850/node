/*
 * @Descripttion: 服务器
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-17 22:04:56
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-19 23:06:27
 */
const http = require('http');
const { now } = require('./utils/date')
const fs = require('fs')
const path = require('path')
const os = require('os')
const readline = require('readline');

const server = http.createServer();

function getClientIP(req) {
    return req.headers['x-forwarded-for'] || // 判断是否有反向代理 IP
        req.connection.remoteAddress || // 判断 connection 的远程 IP
        req.socket.remoteAddress || // 判断后端的 socket 的 IP
        req.connection.socket.remoteAddress;
};
var num = 1; //txt中的行数
var arr = [];//ip数组
var ip;
var obj;

server.on('request', (request, response) => {
    // console.log(request.url)//当前的请求url
    // console.log(request.method)//请求方法
    // console.log(request.headers)//请求头

    if (request.url !== '/favicon.ico') {
        num+=1;
        // console.log(request.headers['user-agent'])//获取请求头
        // console.log(request.headers['user-agent'])//浏览器版本
        let llq = request.headers['user-agent'];
        // console.log(llq);//浏览器型号
        let time = now();
        let str = getClientIP(request) + "  " + now() + "  " + request.url + "  " + request.method + "  " + llq + os.EOL;

        // console.log(str.slice(0,10));//获取日志的文件名

        // console.log(__dirname)//D:\Ankang\Document\1000phone\1000phone\day0517

        //定义日志文件名及其保存位置
        let logPath = path.join(__dirname, `data/${time.slice(0, 10)}.log`);
        //如果文件存在直接追加
        if (fs.existsSync(logPath)) {
            fs.writeFile(logPath, str, {
                encoding: 'utf-8',
                flag: 'a',
            }, err => { })
        } else {//如果文件不存在，需要先创建文件
            fs.writeFile(logPath, str, {
                encoding: 'utf-8',
            }, err => { })
        }
        //读取文件内容
        // fs.readFile(logPath, 'utf-8', (err, data) => {
        //     console.log(data);
        // })
        const r1 = readline.createInterface({
            input: fs.createReadStream(logPath)
        });

        //事件监听
        r1.on('line', function (line) { 
            // console.log('Line from file:' + i + ":" + line);
            // console.log(i + " " + line.split("  ")[0])
            // arr.push(line.split("  ")[0])
            // console.log(arr)
            // num += 1;
            getObj(line.split("  ")[0]);
        })
        // // 读取完成后,将arr作为参数传给回调函数
        // r1.on('end', function () {
            
        // });
    }

    function getObj(data) {
        // console.log(arr)
        arr.push(data);
        // ip = unique(a)
        // num+=1;

    }
    ip = unique(arr);
    // console.log(ip)
    //数组去重
    function unique(arr) {
        return arr.filter(function (item, index, arr) {
            //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
            return arr.indexOf(item, 0) === index;
        });
    }

    obj={
        "IP地址":ip,
        "访问量":num,
    }

    //响应头
    response.setHeader('Content-Type', "text/html;charset=utf-8");
    // 给服务器的响应
    // response.end(JSON.stringify({id:1,num:'Ankang'}));
    response.end(JSON.stringify(obj));
})
server.listen(3000, '0.0.0.0', () => {
    console.log('服务已启动 http://127.0.0.1:3000');
})
