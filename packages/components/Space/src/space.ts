import { PropType } from "vue"

export const SpaceProps = {
  /**
   * @zh 间距大小
   */
  size: {
    type: [Number, String] as PropType<number | 'small' | 'medium' | 'large'>,
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
    type: String as PropType<string>,
    default: 'start',
  },
  /**
   * @zh 对齐方向
   */
  direction: {
    type: String as PropType<string>,
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