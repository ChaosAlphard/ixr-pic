/**
 * 防抖
 * 在每次触发时设定定时器，若在定时器期间内再次触发，则重新计时
 * @param {Function} fn 要执行的函数
 * @param {Number} delay 延时
 * @return {Function} 防抖后的函数
 */
function debounce(fn: Function, delay: number = 500): Function {
  let timer:null|number = null
  return function() {
    if(timer) {
      clearTimeout(timer)
      timer = setTimeout(fn, delay)
    } else {
      timer = setTimeout(fn, delay)
    }
  }
}

/**
 * 节流
 * 设定一个触发间隔，若多次触发，则间隔时间内的触发不会触发函数
 * @param {Function} fn 要执行的函数
 * @param {Number} delay 执行间隔
 * @return {Function} 节流后的函数
 */
function throttle(fn: Function,
  delay: number = 500, ...args: any[]): Function {
  let valid: boolean = true
  return function(this: any) {
    if(valid) {
      valid = false
      fn.call(this, ...args)
      setTimeout(() => {
        valid = true
      }, delay)
    }
  }
}

export { debounce, throttle }
