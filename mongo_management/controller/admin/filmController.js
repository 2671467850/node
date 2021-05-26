/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-25 22:32:54
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-26 11:10:45
 */
// 模型
const filmModel = require('../../db/model/filmModel')
module.exports = {
  index(req, res) {
    res.send('影片列表')
  },
  add(req, res) {
    res.render('admin/film/add.html')
  },
  upfile(req, res) {
    // 回显给客户端的地址
    const filename = '/uploads/' + req.file.filename;
    res.send({
      code: 0,
      msg: 'ok',
      url: filename
    })
  },
  async store(req, res) {
    let postData = req.body;
    console.log(postData)
    delete postData['file']
    let ret = await filmModel.store(postData)
    if(ret){
      res.redirect('/admin/film/index')
    }else{
      res.redirect('/admin/film/add')
    }
  }
}