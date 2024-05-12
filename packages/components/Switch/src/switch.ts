import { PropType } from "vue"
import { isBoolean } from '../../../utils'

export const SwitchProps = {
  /**
   * @description 双向绑定 v-model
   */
  modelValue: {
    type: Boolean,
    default: false
  },
  /**
   * @description 开关大小
   */
  size: {
   type: String as PropType<'small' | 'medium'>,
   default: "medium",
  },
  /**
   * @description 开关是否加载中
   */
  loading: {
   type: Boolean,
   default: false,
  },
  /**
   * @description 开关是否禁用
   */
  disabled: {
   type: Boolean,
   default: false,
  }
} as const;


export const SwitchEmits = {
  /**
   * @description 双向绑定，更新 v-model
   */
  'update:modelValue': (value: Boolean) => isBoolean(value),
  /**
   * @description 绑定值改变时触发
   */
  change: (value: Boolean) => isBoolean(value),
 
}as const;