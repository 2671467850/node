/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-17 22:06:03
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-17 23:03:36
 */
module.exports = {
    now(){
        let dt = new Date()
        let y = dt.getFullYear()
        let m = (dt.getMonth() + 1 + '').padStart(2,'0');
        let d = dt.getDate();
        let h = dt.getHours();
        let f = (dt.getMinutes()+'').padStart(2,'0');
        let s = (dt.getSeconds()+'').padStart(2,'0');
        return `${y}-${m}-${d}-${h}-${f}-${s}`
    }
}