<!-- 输入框组件 -->
<template>
  <input type="text" placeholder="写点啥呢">
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { inputProps } from './input'

defineOptions({ 
  name: 'q-input',
  inheritAttrs: false
})
const props = defineProps({ ...inputProps })

const inputStyle = computed(() => {
  return {

  }
})
</script>