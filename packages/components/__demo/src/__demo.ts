import { PropType } from "vue"

export const __demoProps = {
  /**
   * @description 名称
   */
  name: {
    type: String as PropType<string>,
    default: ''
  },
  /**
   * @description 兼容自定义样式
   */
  style: {
    type: Object,
    default: () => ({})
  }
}