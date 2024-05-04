import { PropType } from "vue"

// 定义组件的 Props 类型
export const avatarProps = {
  /**
   * @description 头像地址
   */
  src: {
    type: String,
    default: ''
  },
  /**
   * @description 头像大小
   */
  size: {
    type: [String, Number] as PropType<string | number>,
    default: 'medium'
  },
  /**
   * @description 头像是否为圆形
   */
  round: {
    type: Boolean,
    default: false
  }
}
