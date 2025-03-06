import { PropType } from "vue"
import { ElementTypes } from '@qii-ui/utils'

export const linkProps = {
  /**
   * @zh 链接类型
   */
  type: {
    type: String as PropType<ElementTypes>,
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
    type: String as PropType<'new' | 'replace' | 'push'>,
    default: "new",
  },
  /**
   * @zh 链接图标
   */
  icon: {
    type: String,
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