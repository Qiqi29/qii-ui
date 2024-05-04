import { PropType } from "vue"


export const iconProps = {
  /**
   * @description 图标名称
   */
  name: {
    type: String,
    default: "qii",
  },
  /**
   * @description 图标大小
   */
  size: {
    type: [String, Number] as PropType<string | number>,
    default: "1.6em",
  },
  /**
   * @description 图标颜色
   */
  color: {
    type: String,
    default: "currentColor",
  },
}