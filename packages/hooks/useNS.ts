// 默认命名空间前缀
const defaultNS = 'q'

/**
 * BEM 命名规范
 * 
 * 根据参数生成指定结构的类名：
 * q-button、
 * q-button__primary、
 * is-disabled
 */
export const useNS = function (name: string) {
  /**
   * 返回组件命名空间
   */
  const nameSpace = `${defaultNS}-${name}`

  /**
   * 返回格式：命名空间__参数
   */
  const n = (name: string) => {
    return `${nameSpace}__${name}`;
  }

  /**
   * 返回格式：参数类型为指定类型 => 命名空间__参数
   */
  const t = (par: string | number, type: string) => {
    return typeof par === type ? `${nameSpace}__${par}` : '';
  }

  /**
   * 返回格式：参数为真 => 命名空间__参数
   */
  const s = (status: boolean | string, par: string) => {
    return status ? `${nameSpace}__${par}` : '';
  }

  /**
   * 返回格式：参数为真 => is-参数
   */
  const is = (status: boolean | string, par: string) => {
    return status ? `is-${par}` : '';
  }

  return {
    nameSpace,
    n,
    t,
    s,
    is,
  }
}