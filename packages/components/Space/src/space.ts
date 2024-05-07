import { PropType } from "vue"


export const SpaceProps = {
  /**
   * @description 间距大小
  */
 size: {
   type: [Number, String] as PropType<number | string>,
   default: "medium",
  },
  /**
   * @description 是否为垂直方向
   */
  vertical: {
    type: Boolean,
    default: false,
  },
  /**
   * @description 对齐方向
   */
  direction: {
    type: String as PropType<string>,
    default: 'center',
  },
  /**
   * @description 宽度是否占满父元素
   */
  fill: {
    type: Boolean,
    default: false,
  },
}