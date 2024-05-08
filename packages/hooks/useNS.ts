// 默认命名空间前缀
const defaultNS = 'q'

/**
 * 根据参数生成指定结构的组件类名
 * @param {string} name 组件名称
 * @returns
 */
export const useNS = function (name: string) {
  // 命名空间
  const nameSpace = `${defaultNS}-${name}`

  /**
   * 直接返回 => 命名空间__参数
   */
  const n = (name: string) => {
    return `${nameSpace}__${name}`;
  }

  /**
   * 参数类型为指定类型，返回 => 命名空间__参数
   */
  const t = (par: string | number, type: string) => {
    return typeof par === type ? `${nameSpace}__${par}` : '';
  }

  /**
   * 参数为真，返回 => is-参数
   */
  const is = (status: boolean | string, par: string) => {
    return status ? `is-${par}` : '';
  }

  /**
   * 参数为真，返回 => has-参数
   */
  const has = (status: boolean | string, par: string) => {
    return status ? `has-${par}` : '';
  }

  return {
    nameSpace,
    n,
    t,
    is,
    has
  }
}