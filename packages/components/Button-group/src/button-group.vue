<!-- 按钮组 组件 -->
<template>
  <div :class="buttonGroupClass" ref="buttonGroupRef">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, provide, readonly } from 'vue'
import { useNS } from '../../../hooks/useNS'
import { buttonProps } from './button-group'

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
 * 统一控制按钮样式
 * 使用 provide 传值 
 */
provide('buttonGroup', {
  type: readonly(computed(() => props.type)),
  size: readonly(computed(() => props.size)),
})
</script>