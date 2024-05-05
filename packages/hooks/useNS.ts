// 默认命名空间
const defaultNS = 'q'
// 状态前缀
const statusPrefix = 'is'


/**
 * 根据参数生成指定结构的组件类名
 * @param name 组件名称
 */
export const useNS = function (name: string) {
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
   * 参数为真，返回 => 状态前缀-参数
   */
  const is = (status: boolean | string, par: string) => {
    return status ? `${statusPrefix}-${par}` : '';
  }

  return {
    nameSpace,
    n,
    t,
    is,
  }
}