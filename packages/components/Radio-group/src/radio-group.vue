<template>
  <div :class="radioGroupClass">
    
    <!-- 默认插槽 -->
    <slot v-if="$slots.default"></slot>
    
    <!-- options 属性为真，渲染子组件 -->
    <q-radio 
      v-else-if="options"
      v-for="(item, index) in options" 
      :key="index" 
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
import { useNS } from '@qii-ui/hooks'
import QRadio from '../../Radio'


// 组件配置
defineOptions({ 
  name: 'q-radio-group',
  inheritAttrs: false
})

// 组件属性
const props = defineProps({ ...radioGroupProps })
const emits = defineEmits({ ...radioGroupEmits })

// 组件类名
const ns = useNS('radio-group')
const radioGroupClass = computed(() => [
  ns.nameSpace,
  ns.n(props.size),
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