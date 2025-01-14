import { PropType } from "vue"

export const buttonProps = {
  /**
   * @zh 按钮类型
   */
  type: {
    type: String as PropType<"default" | "primary" | "success" | "warning" | "danger">,
    default: "default",
  },
  /**
   * @zh 按钮尺寸
   */
  size: {
    type: [String, Number] as PropType<number | "small" | "medium" | "large">,
    default: "medium"
  },
  /**
   * @zh 按钮图标
   */
  icon: {
    type: String,
    default: ""
  },
  /**
   * @zh 按钮右侧图标
   */
  rightIcon: {
    type: String,
    default: ""
  },
  /**
   * @zh 按钮形状
   */
  shape: {
    type: String as PropType<"square" | "round" | "circle">,
    default: "square"
  },
  /**
   * @zh 是否为二级按钮
   */
  plain: {
    type: Boolean,
    default: false
  },
  /**
   * @zh 是否为文字按钮
   */
  text: {
    type: Boolean,
    default: false
  },
  /**
   * @zh 文字按钮是否显示背景
   */
  bg: {
    type: Boolean,
    default: false
  },
  /**
   * @zh 是否为长按钮
   */
  long: {
    type: Boolean,
    default: false
  },
  /**
   * @zh 按钮是否加载中
   */
  loading: {
    type: Boolean,
    default: false
  },
  /**
   * @zh 按钮是否禁用
   */
  disabled: {
    type: Boolean,
    default: false
  }
} as const

export const buttonEmits = {
  click: (event: MouseEvent) => event instanceof MouseEvent,
} as const