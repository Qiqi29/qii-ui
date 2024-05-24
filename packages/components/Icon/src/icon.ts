import { PropType } from "vue"


export const iconProps = {
  /**
   * @description 图标名称
   */
  name: {
    type: String,
    default: "",
  },
  /**
   * @description 图标大小
   */
  size: {
    type: [String, Number] as PropType<string | number>,
    default: "1.5em",
  },
  /**
   * @description 图标颜色
   */
  color: {
    type: String,
    default: "currentColor",
  },
  /**
   * @description 图标是否为旋转状态
   */
  spin: {
    type: Boolean,
    default: false,
  },
  /**
   * @description 图标的旋转角度
   */
  rotate: {
    type: Number,
    default: 0,
  },
}