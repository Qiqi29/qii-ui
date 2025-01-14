<template>
  <div :class="buttonGroupClass">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, provide, readonly } from 'vue'
import { buttonProps } from './button-group'
import { useNS } from '@qii-ui/hooks'

defineOptions({ 
  name: 'q-button-group',
  inheritAttrs: false
})

const props = defineProps({ ...buttonProps })

const ns = useNS('button-group')
const buttonGroupClass = computed(() => [
  ns.nameSpace,
])

/**
 * 统一控制样式
 * 使用 provide 把属性传到按钮中
 */
provide('buttonGroup', {
  type: readonly(computed(() => props.type)),
  size: readonly(computed(() => props.size)),
})
</script>