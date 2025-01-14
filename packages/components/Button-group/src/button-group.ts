import { PropType } from "vue"

export const buttonProps = {
  /**
   * @zh 统一控制按钮类型
   */
  type: {
    type: String,
    default: "primary",
  },
  /**
   * @zh 统一控制按钮大小
   */
  size: {
    type: [String, Number] as PropType<string | number>,
    default: "medium"
  },
} as const