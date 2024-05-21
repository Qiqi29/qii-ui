<template>
  <div :class="radioGroupClass">
    
    <!-- 默认插槽 -->
    <slot v-if="$slots.default"></slot>
    
    <!-- 使用 options -->
    <q-radio 
      v-else-if="options"
      v-for="item in options" 
      :key="item" 
      :value="item.value"
      :disabled="item.disabled"
      >
      {{ item.label }}
    </q-radio>

  </div>
</template>

<script lang="ts" setup>
import { computed, provide, readonly } from 'vue'
import { radioGroupProps, radioGroupEmits } from './radio-group'
import { useNS } from '../../../hooks/useNS'

// 组件配置
defineOptions({ 
  name: 'q-radio-group',
  inheritAttrs: false
})

// 解构属性
const props = defineProps({ ...radioGroupProps })
const emits = defineEmits({ ...radioGroupEmits })

// 组件命名空间
const ns = useNS('radio-group')
const radioGroupClass = computed(() => [
  ns.nameSpace,
  ns.is(props.vertical, 'vertical'),
  ns.is(props.button, 'button'),
])

// 更新值
const updateValue = (val: string | number | boolean) => {
  emits('update:modelValue', val)
}

// 传值给子组件
provide('radioGroup', {
  modelValue: readonly(computed(() => props.modelValue)),
  isButton: readonly(computed(() => props.button)),
  size: readonly(computed(() => props.size)),
  updateValue,
})

</script>