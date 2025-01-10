import { PropType } from "vue"

export const SpaceProps = {
  /**
   * @description 间距大小
   */
  size: {
   type: [Number, String] as PropType<number | 'small' | 'medium' | 'large'>,
   default: "medium",
  },
  /**
   * @description 是否为垂直排列
   */
  vertical: {
    type: Boolean,
    default: false,
  },
  /**
   * @description 排列方式
   */
  justify: {
    type: String as PropType<string>,
    default: 'start',
  },
  /**
   * @description 对齐方向
   */
  direction: {
    type: String as PropType<string>,
    default: 'start',
  },
  /**
   * @description 宽度是否占满父元素
   */
  // fill: {
  //   type: Boolean,
  //   default: false,
  // },
} as const;