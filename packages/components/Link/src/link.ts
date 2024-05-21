import { PropType } from "vue"

export const linkProps = {
  /**
   * @description 链接类型
   */
  type: {
    type: String,
    default: "primary",
  },
  /**
   * @description 链接地址
   */
  href: {
    type: String,
    default: "",
  },
  /**
   * @description 链接的跳转方式
   */
  open: {
    type: String as PropType<'newTab' | 'replace' | 'push'>,
    default: "newTab",
  },
  /**
   * @description 是否显示下划线
   */
  underline: {
    type: Boolean,
    default: false,
  },
  /**
   * @description 链接的图标
   */
  icon: {
    type: [String, Boolean] as PropType<string | boolean>,
  },
  /**
   * @description 是否禁用链接
   */
  disabled: {
    type: Boolean,
    default: false,
  },
} as const;