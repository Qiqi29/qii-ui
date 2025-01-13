import { PropType } from "vue"

export const avatarProps = {
  /**
   * @description 头像地址
   */
  src: {
    type: String,
  },
  /**
   * @description 头像大小
   */
  size: {
    type: [String, Number] as PropType<number | 'small' | 'medium' | 'large'>,
    default: 'medium'
  },
  /**
   * @description 头像的形状
   */
  shape: {
    type: String as PropType<'square' | 'round'>,
    default: 'round'
  }
} as const;
