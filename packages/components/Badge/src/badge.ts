import { PropType } from "vue"

export const badgeProps = {
  /**
   * @description 徽标计数
   */
  count: {
    type: Number as PropType<number>,
    default: 0
  },
  /**
   * @description 徽标最大值
   */
  maxCount: {
    type: Number as PropType<number>,
    default: 99
  },
  /**
   * @description 徽标文本
   */
  text: {
    type: String as PropType<string>,
    default: ''
  },
  /**
   * @description 徽标类型
   */
  type: {
    type: String as PropType<string>,
    default: 'danger'
  },
  /**
   * @description 自定义徽标颜色
   */
  color: {
    type: String as PropType<string>,
  },
  /**
   * @description 是否为点点样式
   */
  dot: {
    type: Boolean,
    default: false
  },
} as const;
