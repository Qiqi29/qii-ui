import { PropType } from "vue"
import { isString } from "@qii-ui/utils"

export const inputProps = {
  /**
   * @zh 双向绑定 v-model
   */
  modelValue: {
    type: String,
    default: ''
  },
  /**
   * @zh 输入框类型
   */
  type: {
    type: String,
    default: 'text'
  },
  /**
   * @zh 输入框大小
   */
  size: {
    type: String as PropType<"small" | "medium" | "large">,
    default: 'medium'
  },
  /**
   * @zh 输入框宽度
   */
  width: {
    type: String,
    default: '240px'
  },
  /**
   * @zh 输入框提示文本
   */
  placeholder: {
    type: String,
  },
  /**
   * @zh 输入框图标
   */
  icon: {
    type: String,
  },
  /**
   * @zh 输入框右侧图标
   */
  rightIcon: {
    type: String,
  },
  /**
   * @zh 是否默认聚焦输入框
   */
  autofocus: {
    type: Boolean,
    default: false
  },
  /**
   * @zh 是否显示清空按钮
   */
  clearable: {
    type: Boolean,
    default: false
  },
  /**
   * @zh 是否切换为密码框
   */
  password: {
    type: Boolean,
    default: false
  },
  /**
   * @zh 最大长度
   */
  maxlength: {
    type: Number,
  },
  /**
   * @zh 是否显示字数统计
   */
  wordLimit: {
    type: Boolean,
    default: false
  },
  /**
   * @zh 输入框是否只读
   */
  readonly: {
    type: Boolean,
    default: false
  },
  /**
   * @zh 输入框是否禁用
   */
  disabled: {
    type: Boolean,
    default: false
  },
} as const

export const inputEmits = {
  /**
   * @zh 双向绑定，更新 v-model
   */
  'update:modelValue': (value: String) => isString(value),
  /**
   * @zh 输入时触发
   */
  input: (value: String) => isString(value),
  /**
   * @zh 绑定值改变时触发
   */
  change: (value: String) => isString(value),
  /**
   * @zh 输入框获得焦点时触发
   */
  focus: (event: FocusEvent) => event instanceof FocusEvent,
  /**
   * @zh 输入框失去焦点时触发
   */
  blur: (event: FocusEvent) => event instanceof FocusEvent,
  /**
   * @zh 点击清除按钮时触发
   */
  clear: () => true,
} as const