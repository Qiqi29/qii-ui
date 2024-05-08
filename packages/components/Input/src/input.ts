import { PropType } from "vue"
import { isString } from "@vue/shared"


export const inputProps = {
  /**
   * @description 输入框绑定值
   */
  modelValue: {
    type: [String , Number] as PropType<string | number | null | undefined>,
  },
  /**
   * @description 输入框类型
   */
  type: {
    type: String,
    default: 'text'
  },
  /**
   * @description 输入框提示文本
   */
  placeholder: {
    type: String,
  },
  /**
   * @description 最大长度
   */
  maxlength: {
    type: [Number, String] as PropType<number | string>,
  },
  /**
   * @description 最小长度
   */
  minlength: {
    type: [Number, String] as PropType<number | string>,
  },
  /**
   * @description 输入框是否只读
   */
  readonly: {
    type: Boolean,
    default: false
  },
  /**
   * @description 输入框是否禁用
   */
  disabled: {
    type: Boolean,
    default: false
  },
}

export const inputEmits = {
  /**
   * @description 输入框值改变时触发
   */
  'update:modelValue': (value: String) => isString(value),
  /**
   * @description 输入框获得焦点时触发
   */
  focus: (e: FocusEvent) => e instanceof FocusEvent,
  /**
   * @description 输入框失去焦点时触发
   */
  blur: (e: FocusEvent) => e instanceof FocusEvent,
}