<!-- 按钮组件 -->
<template>
  <i class="q-icon" :style="iconStyle">
    <slot></slot>
    <svg v-if="!slots.default">
      <use :xlink:href="`#icon-${props.name}`"></use>
    </svg>
  </i>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import { iconProps } from './icon'
const slots = useSlots()

defineOptions({ 
  name: 'q-icon',
  inheritAttrs: true
})
const props = defineProps({ ...iconProps })

const iconStyle = computed(() => {
  return {
    color: props.color,
    fontSize: props.size,
  }
})
</script>