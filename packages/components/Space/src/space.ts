import { PropType } from "vue"

export const SpaceProps = {
  /**
   * @zh 间距大小
   */
  size: {
    type: [String, Number] as PropType<'small' | 'medium' | 'large' | number>,
    default: "medium",
  },
  /**
   * @zh 垂直排列
   */
  vertical: {
    type: Boolean,
    default: false,
  },
  /**
   * @zh 排列方式
   */
  justify: {
    type: String,
    default: 'start',
  },
  /**
   * @zh 对齐方向
   */
  direction: {
    type: String,
    default: 'start',
  },
  /**
   * @zh 宽度是否占满父元素
   */
  fill: {
    type: Boolean,
    default: false,
  },
} as const