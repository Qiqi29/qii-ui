import { PropType } from "vue"

export const iconProps = {
  /**
   * @zh 图标名称
   */
  name: {
    type: String as PropType<string>,
  },
  /**
   * @zh 图标颜色
  */
  color: {
    type: String as PropType<string>,
    default: "currentColor",
  },
  /**
   * @zh 图标大小
   */
  size: {
    type: String as PropType<string>,
    default: "1.8em",
  },
  /**
   * @zh 图标是否为旋转状态
   */
  spin: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  /**
   * @zh 自定义图标的旋转角度
   */
  rotate: {
    type: Number as PropType<number>,
  },
} as const;