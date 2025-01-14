import { PropType } from "vue"

export const linkProps = {
  /**
   * @zh 链接类型
   */
  type: {
    type: String,
    default: "primary",
  },
  /**
   * @zh 链接地址
   */
  href: {
    type: String,
    default: "",
  },
  /**
   * @zh 链接的跳转方式
   */
  open: {
    type: String as PropType<'newTab' | 'replace' | 'push'>,
    default: "newTab",
  },
  /**
   * @zh 链接图标
   */
  icon: {
    type: [String] as PropType<string>,
  },
  /**
   * @zh 是否显示下划线
   */
  line: {
    type: Boolean,
    default: false,
  },
  /**
   * @zh 是否禁用链接
   */
  disabled: {
    type: Boolean,
    default: false,
  },
} as const