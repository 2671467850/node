/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-04-24 12:38:58
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-23 17:23:01
 */
/**防抖
 * @params Function fn 回调函数
 * @params Number wait 等待时间 默认600
 * @params bool now true/false true点击即执行，但只执行一次 
*/
function debound(fn, wait = 600, now = true) {

  // 标识 定时器
  let timer = null

  return function (ev) {
    // 判断它是否开始执行还是最后执行
    let start = now && !timer

    // 清除定时器
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      // 让this指向到原来的位置上
      !now ? fn.call(this, ev) : null
    }, wait);

    // 立即执行
    start ? fn.call(this, ev) : null
  }
}

/**
 * 节流 
 * @param {Function} fn 回调函数 
 * @param {Number} wait 时长
 * @return Function
 */
function throttle(fn, wait = 600) {

  // 上一次执行时间
  let prevTime = 0
  // 定时器
  let timer = null

  return function (ev) {
    // 当前时间
    let nowTime = Date.now()

    // 计算当前是否达到了设置的执行时长
    let difftime = wait - (nowTime - prevTime)
    if (difftime <= 0) { // 到达设置的时长
      // 让上一次执行的时间设置为当前执行的时间
      prevTime = nowTime
      // 清除定时器
      clearTimeout(timer)
      timer = null

      // 执行回调函数，注意this指向
      fn.call(this, ev)
    } else if (!timer) {
      timer = setTimeout(() => {
        // 清除定时器
        clearTimeout(timer)
        timer = null
        // 执行回调函数，注意this指向
        fn.call(this, ev)
      }, wait);
    }
  }
}