import { PropType } from "vue"

export const buttonProps = {
  /**
   * @description 按钮类型
   */
  type: {
    type: String as PropType<"default" | "primary" | "success" | "warning" | "danger">,
    default: "default",
  },
  /**
   * @description 按钮尺寸
   */
  size: {
    type: [String, Number] as PropType<string | number>,
    default: "medium"
  },
  /**
   * @description 按钮图标
   */
  icon: {
    type: String,
    default: ""
  },
  /**
   * @description 按钮右侧图标
   */
  rightIcon: {
    type: String,
    default: ""
  },
  /**
   * @description 按钮形状
   */
  shape: {
    type: String as PropType<"square" | "round" | "circle">,
    default: "square"
  },
  /**
   * @description 是否为二级按钮
   */
  plain: {
    type: Boolean,
    default: false
  },
  /**
   * @description 是否为文字按钮
   */
  text: {
    type: Boolean,
    default: false
  },
  /**
   * @description 文字按钮是否显示背景
   */
  bg: {
    type: Boolean,
    default: false
  },
  /**
   * @description 是否为长按钮
   */
  long: {
    type: Boolean,
    default: false
  },
  /**
   * @description 按钮是否加载中
   */
  loading: {
    type: Boolean,
    default: false
  },
  /**
   * @description 按钮是否禁用
   */
  disabled: {
    type: Boolean,
    default: false
  }
} as const;

export const buttonEmits = {
  click: (event: MouseEvent) => event instanceof MouseEvent,
} as const;