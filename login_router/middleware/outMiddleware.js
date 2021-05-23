
/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-20 22:15:51
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-20 22:36:25
 */
const outMiddleware = (req,res,next)=>{
    req.session['username'] = null;
    delete req.session['username']
    res.redirect('/login.html')
    // next()
}
module.exports = outMiddleware