/**
 * 生成命名空间类名
 * @param elementName - 组件名称
 */
export const useNameSpace = function (elementName: string) {
  /**
   * 组件命名空间
   * @example
   * ```ts
   * const ns = useNameSpace('button')
   * ns.nameSpace  // q-button
   * ```
   */
  const nameSpace = `q-${elementName}`

  /**
   * 参数命名空间
   * @param par - 参数名称
   * @returns 返回命名空间加参数
   * @example
   * ```ts
   * const ns = useNameSpace('button')
   * ns.name('small')  // q-button__small
   * ns.name('large')  // q-button__large
   * ```
   */
  const name = (par: string) => {
    return `${nameSpace}__${par}`;
  }

  /**
   * 类型命名空间
   * @param par - 要检查类型的参数
   * @param type - 目标类型
   * @returns 类型匹配返回命名空间加参数，否则返回空字符串
   * @example
   * ```ts
   * const ns = useNameSpace('button')
   * ns.type('hello', 'string')  // q-button__hello
   * ns.type(1234, 'string')     // 空字符串
   * ```
   */
  const type = (par: string | number, type: string) => {
    return typeof par === type ? `${nameSpace}__${par}` : '';
  }

  /**
   * 状态命名空间
   * @param status - 要检查状态的参数
   * @param par - 参数名称
   * @returns 状态为真返回 is 加参数，否则返回空字符串
   * @example
   * ```ts
   * const ns = useNameSpace('button')
   * ns.is(true, 'disabled')  // is-disabled
   * ns.is(false, 'disabled') // 空字符串
   * ```
   */
  const is = (status: boolean | string, par: string) => {
    return status ? `is-${par}` : '';
  }

  return {
    nameSpace,
    name,
    type,
    is,
  }
}