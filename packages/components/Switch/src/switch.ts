import { PropType } from "vue"
import { isBoolean } from '@qii-ui/utils'

export const switchProps = {
  /**
   * @zh 双向绑定 v-model
   */
  modelValue: {
    type: Boolean,
    default: false
  },
  /**
   * @zh 开关的大小
   */
  size: {
    type: String as PropType<"small" | "medium" | "large">,
    default: "medium"
  },
  /**
   * @zh 开关的形状
   */
  shape: {
    type: String as PropType<"square" | "round">,
    default: "round"
  },
  /**
   * @zh 开关开启时的颜色
   */
  checkedColor: {
    type: String,
    default: ""
  },
  /**
   * @zh 开关关闭时的颜色
   */
  uncheckedColor: {
    type: String,
    default: ""
  },
  /**
   * @zh 开关开启时的图标
   */
  checkedIcon: {
    type: String,
    default: "",
  },
  /**
   * @zh 开关关闭时的图标
   */
  uncheckedIcon: {
    type: String,
    default: "",
  },
  /**
   * @zh 开关是否加载中
   */
  loading: {
    type: Boolean,
    default: false
  },
  /**
   * @zh 是否禁用开关
   */
  disabled: {
    type: Boolean,
    default: false
  },
  /**
   * @zh 开关状态改变前的回调
   */
  beforeChange: {
    type: Function,
  },
} as const

export const switchEmits = {
  /**
   * @zh 双向绑定，更新 v-model
   */
  'update:modelValue': (value: Boolean) => isBoolean(value),
  /**
   * @zh 绑定的数据改变时触发
   */
  change: (value: Boolean) => isBoolean(value),
} as const