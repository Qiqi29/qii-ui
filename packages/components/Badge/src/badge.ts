import { PropType } from "vue"

export const badgeProps = {
  /**
   * @zh 徽标计数
   */
  count: {
    type: Number as PropType<number>,
    default: 0
  },
  /**
   * @zh 徽标最大值
   */
  max: {
    type: Number as PropType<number>,
    default: 99
  },
  /**
   * @zh 自定义徽标文本
   */
  text: {
    type: String as PropType<string>,
    default: ''
  },
  /**
   * @zh 徽标类型
   */
  type: {
    type: String as PropType<string>,
    default: 'danger'
  },
  /**
   * @zh 自定义徽标颜色
   */
  color: {
    type: String as PropType<string>,
  },
  /**
   * @zh 是否为点点样式
   */
  dot: {
    type: Boolean,
    default: false
  },
} as const