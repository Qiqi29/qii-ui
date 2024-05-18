import { PropType } from "vue"

export const radioProps = {
  /**
   * @description 单选框值
   */
  value: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    default: "",
  },
  /**
   * @description 单选框是否禁用
   */
  disabled: {
    type: Boolean,
    default: false,
  },
} as const;


export const radioEmits = {
  /**
   * @description 双向绑定，更新 v-model
   */
  'update:modelValue': (value: string | number | boolean) => value,
  /**
   * @description 绑定值改变时触发
   */
  change: (value: string | number | boolean) => value,
} as const;