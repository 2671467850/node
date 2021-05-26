/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-25 22:33:28
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-25 22:33:36
 */
const filmSchema = require('../schema/filmSchema')
const BaseModel = require('./baseModel')

class FilmModel extends BaseModel {

    constructor() {
        super('Film', filmSchema)
    }
}

module.exports = new FilmModel;