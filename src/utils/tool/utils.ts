/**
 * 防抖
 * params fn 回调方法
 * params wait 等待时间 默认200ms
 */
export const debounce = (fn: Function, wait = 200) => {
    let timer: any = null;
    return function fun() {
        const args = arguments;
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(fun, args);
            timer = null;
        }, wait);
    };
};

/**
 * 节流
 *
 *
 */
export const throttling = (fn: Function, wait = 200) => {
    let timer: any = null;
    return function fun() {
        const args = arguments;
        !timer &&
            (timer = setTimeout(() => {
                fn.apply(fun, args);
                timer = null;
            }, wait));
    };
};

export const getTree = (list, keyName, getJson) => {
    const fn = (obj, arr) => {
        const list = [];
        arr.forEach((item) => {
            if (obj.key === item[keyName]) {
                const json = getJson(item);
                list.push(json);
                fn(json, arr);
            }
        });
        obj.children = list;
        obj.name += `（${list.length}）`;
    };

    const arr = [];
    list.forEach((item) => {
        if (item[keyName] === '') {
            const json = getJson(item);
            arr.push(json);
            fn(json, list);
        }
    });
    return arr;
};
