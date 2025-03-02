import { PropType } from "vue"
import { isNumber } from "@qii-ui/utils"

export const scrollbarProps = {
  /**
   * @zh 滚动区域高度
   */
  height: {
    type: String,
  },
  /**
   * @zh 滚动区域最大高度
   */
  maxHeight: {
    type: String,
  },
  /**
   * @zh 是否总是显示滚动条
   */
  alwaysShow: {
    type: Boolean,
    default: false,
  },
  /**
   * @zh 是否使用原生滚动条
   */
  native: {
    type: Boolean,
    default: false,
  },
} as const


export const scrollbarEmits = {
  /**
   * @zh 滚动时触发
   */
  scroll: (scrollTop: number, scrollLeft: number) => {
    return isNumber(scrollTop) && isNumber(scrollLeft)
  }
} as const