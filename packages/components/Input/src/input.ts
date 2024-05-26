import { PropType } from "vue"
import { isString } from "@qii-ui/utils"

// 配置组件属性
export const inputProps = {
  /**
   * @description 双向绑定
   * v-model = modelValue + @update:modelValue
   */
  modelValue: {
    type: String as PropType<string>,
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
    type: String,
    default: '240px'
  },
  /**
   * @description 输入框提示文本
   */
  placeholder: {
    type: String,
  },
  /**
   * @description 输入框图标
   */
  icon: {
    type: String,
    default: ''
  },
  /**
   * @description 输入框右侧图标
   */
  rightIcon: {
    type: String,
    default: ''
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
    type: Number as PropType<number>,
  },
  /**
   * @description 是否显示字数统计
   */
  showWordLimit: {
    type: Boolean,
    default: false
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
  focus: (event: FocusEvent) => event instanceof FocusEvent,
  /**
   * @description 输入框失去焦点时触发
   */
  blur: (event: FocusEvent) => event instanceof FocusEvent,
  /**
   * @description 点击清除按钮时触发
   */
  clear: () => true,
} as const;