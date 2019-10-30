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

/**
 * 使用IntersectionObserver 判断图片是否进入可视区域
 * Sample:
 * const lazyimg = Array.from(document.querySelectorAll('img[data-imgsrc]'))
 * const ob = getObServer()
 * lazyimg.forEach( img => {
 *   ob.observe(img)
 * })
 */
// function getObServer() {
//   return new IntersectionObserver( ioes => {
//     ioes.forEach( ioe => {
//       // target:
//       // 当前正在观察的元素
//       const elem = ioe.target
//       // intersectionRatio: (返回值介于0-1之间)
//       // 当前正在观察的元素有多少部分是可见的
//       const interRatio = ioe.intersectionRatio
//       // intersectionRatio 大于0 则表示元素可见
//       if(interRatio>0&&interRatio<=1) {
//         // 将img 元素中的src 替换为img 元素dataset 中的imgsrc
//         elem.src = elem.dataset.imgsrc
//         // onload 或者onerror 时停止监视对象
//         elem.onload = elem.onerror = () => ob.unobserve(elem)
//       }
//     })
//   })
// }

export { debounce, throttle }
