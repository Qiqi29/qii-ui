import { PropType } from "vue"
import { ElementSizes, ElementShapes } from '@qii-ui/utils'

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
    type: [String, Number] as PropType<ElementSizes | number>,
    default: 'medium'
  },
  /**
   * @zh 头像的形状
   */
  shape: {
    type: String as PropType<ElementShapes>,
    default: 'round'
  }
} as const
