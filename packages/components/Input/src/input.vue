<!-- 输入框组件 -->
<template>
  <div :class="inputClass"> 
    <input 
      :type="type"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :minlength="minlength"
      :readonly="readonly"
      :disabled="disabled"
      @input="handleInput"
      @focus="handleFocus" 
      @blur="handleBlur"
    >
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { inputProps, inputEmits } from './input'
import { useNS } from '../../../hooks/useNS'

defineOptions({ 
  name: 'q-input',
  inheritAttrs: false
})

const props = defineProps({ ...inputProps })
const emits = defineEmits({ ...inputEmits })

// 类名生成
const ns = useNS('input')
const inputClass = computed(() => {
  return [
    ns.nameSpace,
  ]
})

// 处理输入事件
const handleInput = (e: any) => {
  // 只读、禁用，阻止事件
  if (props.readonly || props.disabled) return;
  emits('update:modelValue', e.target.value)
  console.log("输入", e.target.value);
}
// 输入框获得焦点事件
const handleFocus = (e: FocusEvent) => {
  emits('focus', e)
  console.log("获得焦点");
}
// 输入框失去焦点事件
const handleBlur = (e: FocusEvent) => {
  emits('blur', e)
  console.log("失去焦点");
}
</script>