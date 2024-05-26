import { PropType } from "vue"
import { isBoolean } from '@qii-ui/utils'

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
   * @description 开关开启时的颜色
   */
  checkedColor: {
   type: String,
   default: "",
  },
  /**
   * @description 开关关闭时的颜色
   */
  uncheckedColor: {
   type: String,
   default: "",
  },
  /**
   * @description 开关开启时的图标
   */
  checkedIcon: {
   type: String,
   default: "",
  },
  /**
   * @description 开关关闭时的图标
   */
  uncheckedIcon: {
   type: String,
   default: "",
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
  },
  /**
   * @description 开关状态改变前的回调
   */
  beforeChange: Function as PropType<(newValue: string | number | boolean) => Promise<boolean | void> | boolean | void>
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
 
} as const;