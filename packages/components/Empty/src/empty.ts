import { PropType } from "vue"

export const emptyProps = {
  /**
   * @zh 提示文本
   */
  text: {
    type: String,
    default: ''
  },
} as const