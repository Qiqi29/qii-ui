import { PropType } from "vue"

export const avatarGroupProps = {
  /**
   * @description 统一控制头像大小
   */
  size: {
    type: [String, Number] as PropType<number | 'small' | 'medium' | 'large'>,
    default: 'medium'
  },
  /**
   * @description 统一控制头像形状
   */
  shape: {
    type: String as PropType<'square' | 'round'>,
    default: 'round'
  },
  /**
   * @description 最多展示的头像数量
   */
  max: {
    type: Number,
    default: 99
  }
} as const;
