import { ExtractPropTypes, PropType } from "vue"
import { isString } from "@vue/shared"

// 配置组件属性
export const inputProps = {
  /**
   * @description 双向绑定
   * v-model = modelValue + @update:modelValue
   */
  modelValue: {
    type: [String , Number] as PropType<string | number>,
    default: ''
  },
  /**
   * @description 输入框类型
   */
  type: {
    type: String,
    default: 'text'
  },
  /**
   * @description 输入框大小
   */
  size: {
    type: String,
    default: 'medium'
  },
  /**
   * @description 输入框宽度
   */
  width: {
    type: Number,
    default: 240
  },
  /**
   * @description 输入框是否占满父元素
   */
  long: {
    type: Boolean,
    default: false
  },
  /**
   * @description 输入框提示文本
   */
  placeholder: {
    type: String,
  },
  /**
   * @description 是否显示清除按钮
   */
  clearable: {
    type: Boolean,
    default: false
  },
  /**
   * @description 是否启用显示隐藏密码按钮
   */
  showPassword: {
    type: Boolean,
    default: false
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
} as const;
// 导出类型
export type InputProps = ExtractPropTypes<typeof inputProps>;


// 导出发射的事件
export const inputEmits = {
  /**
   * @description 双向绑定
   * 使用 isString 进行类型校验
   */
  'update:modelValue': (value: String) => isString(value),
  /**
   * @description 输入时触发
   */
  input: (value: String) => isString(value),
  /**
   * @description 绑定值改变时触发
   */
  change: (value: String) => isString(value),
  /**
   * @description 输入框获得焦点时触发
   * 使用 instanceof 进行类型校验
   */
  focus: (e: FocusEvent) => e instanceof FocusEvent,
  /**
   * @description 输入框失去焦点时触发
   */
  blur: (e: FocusEvent) => e instanceof FocusEvent,
  /**
   * @description 点击清除按钮时触发
   */
  clear: () => true,
}as const;
// 导出类型
export type InputEmits = typeof inputEmits;