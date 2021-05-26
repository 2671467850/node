/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-25 20:26:40
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-25 20:31:21
 */
const mongoose = require('../conn')
class BaseModel {
    constructor(modelName, schema) {
        this.model = mongoose.model(modelName, schema)
    }

    //数据库查找所有
    async all(filter = {}, field = {}) {
        return await this.model.find(filter, field);
    }

    //查找多个
    async one(filter = {}) {
        return await this.model.findOne(filter)
    }

    /**
     * @name: Ankang
     * @msg: 添加文档信息
     * @param {object} doc
     * @return {*}
     */    
    async store(doc) {
        return await this.model.create(doc)
    }

}

module.exports = BaseModel