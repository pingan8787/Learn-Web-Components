// 业务相关的工具

import { ComponentFlag } from '../config/config.js';
import { textToUpperCase } from './utils.js';

/**
 * 获取 Custom elements 上所有属性的键值对
 * @param {HTMLElement} elem 
 * @returns 
 */
export const getAttributes = elem => {
    if(!elem) return {};
    const attrs = {};
    const attrSource = Object.values(elem.attributes);
    attrSource &&
    attrSource.length > 0 &&
    attrSource.forEach(ele => {
        const { name, value } = ele;
        if(name.startsWith(ComponentFlag)){
            const _name = textToUpperCase(name.replace(ComponentFlag, '')); // 转换为小驼峰的名称
            attrs[_name] = value; // 保存属性的键值对
        }
    })

    return attrs;
}