import { PropType } from "vue"

export const emptyProps = {
  /**
   * @description 提示文本
   */
  text: {
    type: String as PropType<string>,
    default: '暂无数据'
  },
} as const;
