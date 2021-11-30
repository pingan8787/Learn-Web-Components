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
