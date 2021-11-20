/**
 * 防抖
 * params fn 回调方法
 * params wait 等待时间 默认200ms
*/
export const debounce = (fn: Function, wait = 200) => {
    let timer: any = null
    return function fun() {
        const args = arguments
        timer && clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(fun, args)
            timer = null
        }, wait)
    }
}

/**
 * 节流
 * 
 * 
*/
export const throttling = (fn: Function, wait = 200) => {
    let timer: any = null
    return function fun () {
        const args = arguments
        !timer && (timer = setTimeout(() => {
            fn.apply(fun, args)
            timer = null
        }, wait))
    }
}