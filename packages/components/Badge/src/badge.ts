import { PropType } from "vue"

export const badgeProps = {
  /**
   * @zh 徽标计数
   */
  count: {
    type: Number,
    default: 0
  },
  /**
   * @zh 徽标最大值
   */
  max: {
    type: Number,
    default: 99
  },
  /**
   * @zh 自定义徽标文本
   */
  text: {
    type: String,
    default: ''
  },
  /**
   * @zh 徽标类型
   */
  type: {
    type: String,
    default: 'danger'
  },
  /**
   * @zh 自定义徽标颜色
   */
  color: {
    type: String,
    default: ''
  },
  /**
   * @zh 是否为点点样式
   */
  dot: {
    type: Boolean,
    default: false
  },
} as const