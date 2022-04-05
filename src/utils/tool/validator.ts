/*  验证必填项 */
export function validateRequired(rule: any, value: any, callback: any) {
    const reg = /^\s*$/;
    if (!value || reg.test(value)) {
        return Promise.reject('必填项');
    } else {
        return Promise.resolve();
    }
}

/* 是否合法IP地址 */
export function validateIP(rule: any, value: any, callback: any) {
    if (value === '' || value === 'undefined' || value === null) {
        return Promise.resolve();
    } else {
        const reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
        if (!reg.test(value) && value !== '') {
            return Promise.reject('请输入正确的IP地址');
        } else {
            return Promise.resolve();
        }
    }
}

/*  是否手机号码或者固话 */
export function validatePhoneTwo(rule: any, value: any, callback: any) {
    const reg = /^((0\d{2,3}-\d{7,8})|(1[34578]\d{9}))$/;
    if (value === '' || value === 'undefined' || value === null) {
        return Promise.resolve();
    } else {
        if (!reg.test(value) && value !== '') {
            return Promise.reject('请输入正确的电话号码或者固话号码');
        } else {
            return Promise.resolve();
        }
    }
}
/*  是否固话 */
export function validateTelphone(rule: any, value: any, callback: any) {
    const reg = /0\d{2}-\d{7,8}/;
    if (value === '' || value === 'undefined' || value === null) {
        return Promise.resolve();
    } else {
        if (!reg.test(value) && value !== '') {
            return Promise.reject('请输入正确的固话（格式：区号+号码,如010-1234567）');
        } else {
            return Promise.resolve();
        }
    }
}
/*  是否手机号码 */
export function validatePhone(rule: any, value: any, callback: any) {
    const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (value === '' || value === undefined || value === null) {
        return Promise.resolve();
    } else {
        if (!reg.test(value) && value !== '') {
            return Promise.reject('请输入正确的电话号码');
        } else {
            return Promise.resolve();
        }
    }
}
/*  是否身份证号码 */
export function validateIdNo(rule: any, value: any, callback: any) {
    const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (value === '' || value === 'undefined' || value === null) {
        return Promise.resolve();
    } else {
        if (!reg.test(value) && value !== '') {
            return Promise.reject('请输入正确的身份证号码');
        } else {
            return Promise.resolve();
        }
    }
}
/*  是否邮箱 */
export function validateEMail(rule: any, value: any, callback: any) {
    const reg = /^([a-zA-Z0-9]+[-_.]?)+@[a-zA-Z0-9]+.[a-z]+$/;
    if (value === '' || value === 'undefined' || value === null) {
        return Promise.resolve();
    } else {
        if (!reg.test(value)) {
            return Promise.reject('请输入正确的邮箱地址');
        } else {
            return Promise.resolve();
        }
    }
}
/*  合法uri */
export function validateURL(textval: string) {
    const urlregex =
        /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
    return urlregex.test(textval);
}

/* 验证内容是否英文数字以及下划线 */
export function isPassword(rule: any, value: any, callback: any) {
    const reg = /^[_a-zA-Z0-9]+$/;
    if (value === '' || value === 'undefined' || value === null) {
        return Promise.resolve();
    } else {
        if (!reg.test(value)) {
            return Promise.reject('密码仅由英文字母，数字以及下划线组成');
        } else {
            return Promise.resolve();
        }
    }
}

/* 自动检验数值的范围 */
export function checkMaxNumber(rule: any, value: any, callback: any) {
    const re = /^[1-9][0-9]{0,1}$/;
    const rsCheck = re.test(value);
    if (value === '' || value === 'undefined' || value === null) {
        return Promise.resolve();
    } else if (rule.isInteger && !rsCheck) {
        return Promise.reject(`请输入[${rule.min}, ${rule.max}]之间的正整数`);
    } else if (!Number(value)) {
        return Promise.reject(`请输入[${rule.min}, ${rule.max}]之间的数字`);
    } else if (value < rule.min || value > rule.max) {
        return Promise.reject(`请输入[${rule.min}, ${rule.max}]之间的数字`);
    } else {
        return Promise.resolve();
    }
}

// 验证数字输入框最大数值,32767
export function checkMaxVal(rule: any, value: any, callback: any) {
    if (value < 0 || value > 32767) {
        return Promise.reject('请输入[0,32767]之间的数字');
    } else {
        return Promise.resolve();
    }
}
// 验证是否1-99之间
export function isOneToNinetyNine(rule: any, value: any, callback: any) {
    if (!value) {
        return Promise.reject('输入不可以为空');
    }
    setTimeout(() => {
        if (!Number(value)) {
            return Promise.reject('请输入正整数');
        } else {
            const re = /^[1-9][0-9]{0,1}$/;
            const rsCheck = re.test(value);
            if (!rsCheck) {
                return Promise.reject('请输入正整数，值为【1,99】');
            } else {
                return Promise.resolve();
            }
        }
    }, 0);
}

//  验证是否整数
export function isInteger(rule: any, value: any, callback: any) {
    if (!value) {
        return Promise.reject('输入不可以为空');
    }
    if (!Number(value)) {
        return Promise.reject('请输入正整数');
    } else {
        const re = /^[0-9]*[1-9][0-9]*$/;
        const rsCheck = re.test(value);
        if (!rsCheck) {
            return Promise.reject('请输入正整数');
        } else {
            return Promise.resolve();
        }
    }
}
//  验证是否整数,非必填
export function isIntegerNotMust(rule: any, value: any, callback: any) {
    if (!value) {
        return Promise.resolve();
    }
    setTimeout(() => {
        if (!Number(value)) {
            return Promise.reject('请输入正整数');
        } else {
            const re = /^[0-9]*[1-9][0-9]*$/;
            const rsCheck = re.test(value);
            if (!rsCheck) {
                return Promise.reject('请输入正整数');
            } else {
                return Promise.resolve();
            }
        }
    }, 1000);
}

//  验证是否是[0-1]的小数
export function isDecimal(rule: any, value: any, callback: any) {
    if (!value) {
        return Promise.reject('输入不可以为空');
    }
    setTimeout(() => {
        if (!Number(value)) {
            return Promise.reject('请输入[0,1]之间的数字');
        } else {
            if (value < 0 || value > 1) {
                return Promise.reject('请输入[0,1]之间的数字');
            } else {
                return Promise.resolve();
            }
        }
    }, 100);
}

//  验证是否是[1-10]的小数,即不可以等于0
export function isBtnOneToTen(rule: any, value: any, callback: any) {
    if (typeof value === 'undefined') {
        return Promise.reject('输入不可以为空');
    }
    setTimeout(() => {
        if (!Number(value)) {
            return Promise.reject('请输入正整数，值为[1,10]');
        } else {
            if (!(value === '1' || value === '2' || value === '3' || value === '4' || value === '5' || value === '6' || value === '7' || value === '8' || value === '9' || value === '10')) {
                return Promise.reject('请输入正整数，值为[1,10]');
            } else {
                return Promise.resolve();
            }
        }
    }, 100);
}
//  验证是否是[1-100]的小数,即不可以等于0
export function isBtnOneToHundred(rule: any, value: any, callback: any) {
    if (!value) {
        return Promise.reject('输入不可以为空');
    }
    setTimeout(() => {
        if (!Number(value)) {
            return Promise.reject('请输入整数，值为[1,100]');
        } else {
            if (value < 1 || value > 100) {
                return Promise.reject('请输入整数，值为[1,100]');
            } else {
                return Promise.resolve();
            }
        }
    }, 100);
}
//  验证是否是[0-100]的小数
export function isBtnZeroToHundred(rule: any, value: any, callback: any) {
    if (!value) {
        return Promise.reject('输入不可以为空');
    }
    setTimeout(() => {
        if (!Number(value)) {
            return Promise.reject('请输入[1,100]之间的数字');
        } else {
            if (value < 0 || value > 100) {
                return Promise.reject('请输入[1,100]之间的数字');
            } else {
                return Promise.resolve();
            }
        }
    }, 100);
}

//  验证端口是否在[0,65535]之间
export function isPort(rule: any, value: any, callback: any) {
    if (!value) {
        return Promise.reject('输入不可以为空');
    }
    setTimeout(() => {
        if (value === '' || typeof value === 'undefined') {
            return Promise.reject('请输入端口值');
        } else {
            const re = /^([0-9]|[1-9]\d|[1-9]\d{2}|[1-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/;
            const rsCheck = re.test(value);
            if (!rsCheck) {
                return Promise.reject('请输入在[0-65535]之间的端口值');
            } else {
                return Promise.resolve();
            }
        }
    }, 100);
}
//  验证端口是否在[0,65535]之间，非必填,isMust表示是否必填
export function isCheckPort(rule: any, value: any, callback: any) {
    if (!value) {
        return Promise.resolve();
    }
    setTimeout(() => {
        if (value === '' || typeof value === 'undefined') {
            //  return Promise.reject('请输入端口值');
        } else {
            const re = /^([0-9]|[1-9]\d|[1-9]\d{2}|[1-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/;
            const rsCheck = re.test(value);
            if (!rsCheck) {
                return Promise.reject('请输入在[0-65535]之间的端口值');
            } else {
                return Promise.resolve();
            }
        }
    }, 100);
}

/*  小写字母 */
export function validateLowerCase(str: string) {
    const reg = /^[a-z]+$/;
    return reg.test(str);
}
/* 保留2为小数 */
export function validatetoFixedNew(str: string) {
    return str;
}
/*  验证key */
//  export function validateKey (str) {
//      var reg = /^[a-z_\-:]+$/;
//      return reg.test(str);
//  }

/*  大写字母 */
export function validateUpperCase(str: string) {
    const reg = /^[A-Z]+$/;
    return reg.test(str);
}

/*  大小写字母 */
export function validatAlphabets(str: string) {
    const reg = /^[A-Za-z]+$/;
    return reg.test(str);
}

/*  大小写字母数字 */
export function validatAlphabetsNumber(rule: any, value: any, callback: any) {
    const reg = /^[A-Za-z0-9]+$/;
    if (value && !reg.test(value)) {
        return Promise.reject('请输入字母或数字');
    } else {
        return Promise.resolve();
    }
}
