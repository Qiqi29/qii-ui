import { PropType } from "vue"
import { ElementSizes, ElementShapes } from '@qii-ui/utils'

export const avatarGroupProps = {
  /**
   * @zh 统一控制头像大小
   */
  size: {
    type: [String, Number] as PropType<ElementSizes | number>,
    default: 'medium'
  },
  /**
   * @zh 统一控制头像形状
   */
  shape: {
    type: String as PropType<'square' | 'round'>,
    default: 'round'
  },
  /**
   * @zh 最多展示的头像数量
   */
  max: {
    type: Number,
    default: 10
  }
} as const;
