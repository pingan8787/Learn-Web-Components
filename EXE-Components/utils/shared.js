// 业务相关的工具

import { ComponentFlag, EventFlag } from '../config/config.js';
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
        if(
            name.startsWith(ComponentFlag) || // 自定义属性处理
            name.startsWith(EventFlag) // 自定义事件处理
        ){
            const _name = textToUpperCase(name.replace(ComponentFlag, '')); // 转换为小驼峰的名称
            attrs[_name] = value;
        }
    })

    return attrs;
}

/**
 * 将属性对象，转换为字符串
 * 例如：将 { a: 'aa', b: 'bb'} 转换为 a="aa" b="bb"
 * @param {object} attrs 需要处理的属性对象
 * @returns 
 */
export const renderAttrStr = attrs => {
    if(!attrs || typeof attrs !== 'object') return;
    const keys = Object.keys(attrs);
    return keys.length > 0 && 
    keys.reduce((pre, cur) => 
        attrs[cur] ? pre + `${cur}="${attrs[cur]}" ` : ''
    , '')
}