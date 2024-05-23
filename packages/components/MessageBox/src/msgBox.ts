import { PropType } from "vue"

export const msgBoxProps = {
  /**
   * @description 消息类型
   */
  type: {
    type: String as PropType<"info" | "success" | "warning" | "error">,
    default: "info",
  },
  /**
   * @description 消息框图标
   */
  icon: {
    type: String,
    default: "info",
  },
  /**
   * @description 消息标题文本
   */
  title: {
    type: String,
    default: "默认标题",
  },
  /**
   * @description 是否显示关闭按钮
   */
  showClose: {
    type: Boolean,
    default: false,
  },
  /**
   * @description 消息关闭前的回调
   */
  beforeClose: Function as PropType<(done: () => void) => void>
} as const;


export const msgBoxEmits = {
  /**
   * @description 打开消息框触发
   */
  open: () => true,
  /**
   * @description 关闭消息框触发
   */
  close: () => true,
  /**
   * @description 消息框关闭后触发
   */
  closed: () => true,
}