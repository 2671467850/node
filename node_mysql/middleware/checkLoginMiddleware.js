/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-22 09:27:32
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-22 17:52:37
 */
module.exports = (req,res,next)=>{
    if(!req.session['username'])
        res.redirect('/admin/login?type=2')
    else next()
}