import { PropType } from "vue"

export const avatarProps = {
  /**
   * @zh 头像地址
   */
  src: {
    type: String,
    default: ''
  },
  /**
   * @zh 头像大小
   */
  size: {
    type: [String, Number] as PropType<'small' | 'medium' | 'large' | number>,
    default: 'medium'
  },
  /**
   * @zh 头像的形状
   */
  shape: {
    type: String as PropType<'square' | 'round'>,
    default: 'round'
  }
} as const
