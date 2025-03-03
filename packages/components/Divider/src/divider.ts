import { PropType } from "vue"

export const dividerProps = {
  /**
   * @zh 占用空间
   */
  space: {
    type: String,
    default: '48px'
  },
  /**
   * @zh 标题位置
   */
  titlePosition: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'center'
  },
  /**
   * @zh 是否为垂直分割线
   */
  vertical: {
    type: Boolean,
    default: false
  },
} as const