import { PropType } from "vue"
import { isNumber } from "../../../utils/types"


export const scrollbarProps = {
  /**
   * @description 滚动区域高度
   */
  height: {
    type: String as PropType<string>,
  },
  /**
   * @description 滚动区域最大高度
   */
  maxHeight: {
    type: String as PropType<string>,
  },
  /**
   * @description 是否总是显示滚动条 
   */
  always: {
    type: Boolean as PropType<boolean>,
    default: false,
  }
} as const;


export const scrollbarEmits = {
  /**
   * @description 触发滚动事件的回调函数
   */
  scroll:(scrollLeft:number, scrollTop:number) => isNumber(scrollLeft) && isNumber(scrollTop)
} as const