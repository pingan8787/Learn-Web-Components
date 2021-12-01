/**
 * 将自定义符号分隔的字符串，转换为小驼峰 
 * TODO: 待支持自定义符号，目前支持 -
 * @param {*} text 
 * @returns {string}
 */
export const textToUpperCase = text => {
    if(!text) return '';
    return text.replace(/-(\w)/g, (all,letter) => letter.toUpperCase());
}
/**
 * 判断目标是否为指定类型
 * @param {any} target 
 * @param {string} type 
 * @returns {boolean}
 */
export const isType = (target, type) => target && type && typeof target === type;

/**
 * 判断参数是否为函数
 * @param {any} target 
 * @returns {boolean} 是否为函数
 */
export const isFun = target => isType(target, 'function');

/**
 * 判断参数是否为函数
 * @param {any} t 
 * @returns {boolean} 是否为函数
 */
 export const isStr = target => isType(target, 'string');

/**
 * 将函数字符串包装成一个可执行函数
 * @param {string} fnStr
 * @returns {function}
 */
export const warpFun = fnStr => {
    if(!fnStr || typeof fnStr !== 'string') return () => {};
    return Function(fnStr);
}

/**
 * 执行指定方法，并阻止默认事件
 * @param {event}} $event 
 * @param {function} fn 
 */
export const runFun = ($event, fn) => {
    $event.stopPropagation();
    $event.preventDefault();
    isStr(fn) && (fn = warpFun(fn));
    fn();
}