<!-- 开关组件 -->
<template>
  <div :class="switchClass">
    <label>
      <input type="checkbox">
      <div class="slider" @click="onChange"></div>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useNS } from '../../../hooks/useNS'
import { SwitchProps, SwitchEmits } from './switch'

// 组件配置
defineOptions({ 
  name: 'q-switch',
  inheritAttrs: false
})

// 引入外部定义的属性
const props = defineProps({ ...SwitchProps })
const emits = defineEmits({ ...SwitchEmits })

// 类名生成
const ns = useNS('switch')
const switchClass = computed(() => {
  return [
    ns.nameSpace,
    ns.n(props.size),
    ns.is(props.modelValue, 'open')
  ]
})

// 开关切换执行
const onChange = () => {
  if (props.disabled || props.loading) return;
  emits('update:modelValue', !props.modelValue)
  emits('change', !props.modelValue)
}
</script>