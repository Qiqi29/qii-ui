import { PropType } from "vue"
import { isBoolean } from '@qii-ui/utils'

export const tagProps = {
  /**
   * @description 标签类型
   */
  type: {
    type: String as PropType<"default" | "primary" | "success" | "warning" | "danger">,
    default: "primary",
  },
  /**
   * @description 标签大小
   */
  size: {
   type: String as PropType<'small' | 'medium' | 'large'>,
   default: "medium",
  },
  /**
   * @description 是否显示边框
  */
 bordered: {
   type: Boolean,
   default: false,
  },
  /**
   * @description 是否为圆角样式
  */
 round: {
   type: Boolean,
   default: false,
  },
  /**
   * @description 是否填充背景色
  */
 fill: {
   type: Boolean,
   default: false,
  },
  /**
   * @description 标签图标
   */
  icon: {
   type: String,
   default: "",
  },
  /**
   * @description 自定义颜色。
   */
  color: {
   type: Object,
  },
  /**
   * @description 标签是否可以关闭
   */
  closable: {
   type: Boolean,
   default: false,
  },
  /**
   * @description 标签是为加载状态
   */
  loading: {
   type: Boolean,
   default: false,
  },
  /**
   * @description 标签是否禁用
   */
  disabled: {
   type: Boolean,
   default: false,
  },
} as const


export const tagEmits = {
  /**
   * @description 点击标签时触发
   */
  click: (event: MouseEvent) => event instanceof MouseEvent,
  /**
   * @description 点击关闭按钮时触发
   */
  close: (event: MouseEvent) => event instanceof MouseEvent,
} as const