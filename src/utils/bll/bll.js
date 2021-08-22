// 对象转数组
export const objToArr = (obj) => {
    const arr = [];
    (function getDeepObj(v) {
        arr.push({
            name: v.name,
            path: v.path,
        });
        if (v.children && v.children.length > 0) {
            getDeepObj(v.children[0]);
        }
    })(obj);
    return arr;
};