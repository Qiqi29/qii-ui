import { PropType } from "vue"

export const buttonProps = {
  /**
   * @zh 统一控制按钮类型
   */
  type: {
    type: String as PropType<"default" | "primary" | "success" | "warning" | "danger">,
    default: "default",
  },
  /**
   * @zh 统一控制按钮大小
   */
  size: {
    type: [String, Number] as PropType<"small" | "medium" | "large" | number>,
    default: "medium"
  },
} as const