import { PropType } from "vue"

export const scrollbarProps = {
  /**
   * @description 滚动条滑块是否显示在容器外
   */
  outside: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  /**
   * @description 是否总是显示滚动条 
   */
  always: {
    type: Boolean as PropType<boolean>,
    default: false,
  }
} as const;