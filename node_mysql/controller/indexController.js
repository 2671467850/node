/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-21 22:46:28
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-23 17:17:50
 */
module.exports = {
    index(req,res){
        // res.render('admin/index.html')
    },
    welcome(req,res){
        let ip = req.socket.remoteAddress
        res.render('admin/welcome.html',{ip})
    },
    logout(req,res){
        req.session['username'] = null;
        delete req.session['username']
        // res.redirect('/admin/login?type=3')
        res.send({code:3,msg:""})
    }
}