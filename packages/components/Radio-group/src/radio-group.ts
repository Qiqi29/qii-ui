import { PropType } from "vue"

// 定义使用 options 的interface
interface RadioGroupOptions {
  label: string;
  value: string | number | boolean;
  disabled: boolean;
}


export const radioGroupProps = {
  /**
   * @description 双向绑定 v-model
   */
  modelValue: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    default: undefined
  },
  /**
   * @description 选项列表
   */
  options: {
    type: Array as PropType<Array<RadioGroupOptions>>,
    default: () => []
  },
  /**
   * @description 选项是否垂直排列
   */
  vertical: {
    type: Boolean,
    default: false
  },
  /**
   * @description 选项的大小
   */
  size: {
    type: [String] as PropType<string>,
    default: 'medium'
  },
  /**
   * @description 选项是否按钮样式
   */
  button: {
    type: Boolean,
    default: false
  },
} as const;


export const radioGroupEmits = {
  /**
   * @description 双向绑定，更新 v-model
   */
  'update:modelValue': (value: string | number | boolean) => value,
  /**
   * @description 绑定值改变时触发
   */
  change: (value: string | number | boolean) => value,
} as const;