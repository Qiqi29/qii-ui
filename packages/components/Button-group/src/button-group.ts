import { PropType } from "vue"


export const buttonProps = {
  /**
   * @description 统一控制按钮类型
   */
  type: {
    type: String,
    default: "default",
  },
  /**
   * @description 统一控制按钮大小
   */
  size: {
    type: [String, Number] as PropType<string | number>,
    default: "medium"
  },
}