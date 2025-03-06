import { PropType } from "vue"
import { ElementTypes, ElementSizes } from '@qii-ui/utils'

export const buttonProps = {
  /**
   * @zh 统一控制按钮类型
   */
  type: {
    type: String as PropType<ElementTypes>,
    default: "default",
  },
  /**
   * @zh 统一控制按钮大小
   */
  size: {
    type: [String, Number] as PropType<ElementSizes | number>,
    default: "medium"
  },
} as const