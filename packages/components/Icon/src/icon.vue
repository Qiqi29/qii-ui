<!-- 按钮组件 -->
<template>
  <i class="q-icon" :style="iconStyle">
    <svg>
      <use :xlink:href="`#icon-${props.name}`"></use>
    </svg>
  </i>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { iconProps } from './icon'

defineOptions({ 
  name: 'q-icon',
  inheritAttrs: false
})
const props = defineProps({ ...iconProps })

const iconStyle = computed(() => {
  return {
    color: props.color,
    fontSize: props.size,
  }
})
</script>