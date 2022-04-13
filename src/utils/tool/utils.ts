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
    const maps = {};
    const fn = (obj, arr) => {
        const list = [];
        arr.forEach((item) => {
            if (obj.key === item[keyName]) {
                if (item.type === 2 && !maps[item.key]) {
                    maps[item.key] = item;
                    list.push(item);
                } else if (!maps[item.structureID]) {
                    maps[item.structureID] = item;
                    const json = getJson(item);
                    list.push(json);
                    fn(json, arr);
                }
            }
        });
        obj.children = list;
    };

    const arr = [];
    list.forEach((item) => {
        if (item[keyName] === '' && !maps[item.key]) {
            maps[item.key] = item;
            const json = getJson(item);
            arr.push(json);
            fn(json, list);
        }
    });
    return arr;
};

/**
 * json 转 select 的options
 *
 */
export const jsonToArray = (obj) => {
    const arr = [];
    for (let m in obj) {
        arr.push({
            label: obj[m],
            value: m,
        });
    }
    return arr;
};

/**
 * json 转 select 的options
 *
 */
export const arrayToOptions = (data, valueKey, labelKey) => {
    const arr = [];
    data.forEach((item) => {
        arr.push({
            label: item[labelKey],
            value: JSON.stringify({
                id: item[valueKey],
                name: item[labelKey],
            }),
        });
    });
    return arr;
};

export const isLogin = () => {
    return localStorage.getItem('token');
};
