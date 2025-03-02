/**
 * 类型检查函数
 * @param val 需要判断的值
 * @returns 判断结果
 */
export const isString = (val: any): val is string => typeof val === 'string'
export const isNumber = (val: any): val is number => typeof val === 'number'
export const isBoolean = (val: any): val is boolean => typeof val === 'boolean'
export const isFunction = (val: any): val is Function => typeof val === 'function'
export const isArray = (val: any): val is Array<any> => Array.isArray(val)
export const isUndefined = (val: any): val is undefined => val === undefined
