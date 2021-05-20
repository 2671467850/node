/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-20 21:32:34
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-20 22:16:40
 */
const check = (req,res,next)=>{
    if(req.session['username']){
        next()
    }else{
        res.redirect('/login.html')
    }
}
module.exports = check