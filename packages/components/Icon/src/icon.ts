import { PropType } from "vue"

export const iconProps = {
  /**
   * @zh 图标名称
   */
  name: {
    type: String,
    default: "",
  },
  /**
   * @zh 图标颜色
  */
  color: {
    type: String,
    default: "currentColor",
  },
  /**
   * @zh 图标大小
   */
  size: {
    type: String,
    default: "1.5em",
  },
  /**
   * @zh 图标是否为旋转状态
   */
  spin: {
    type: Boolean,
    default: false,
  },
  /**
   * @zh 自定义图标的旋转角度
   */
  rotate: {
    type: Number,
    default: 0,
  },
} as const;