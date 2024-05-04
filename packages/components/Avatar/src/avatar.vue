<!-- 头像组件 -->
<template>
  <span class="q-avatar" :class="classList" :style="styles">
    <img v-if="src" :src="src" alt="">
  </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { avatarProps } from './avatar'

// 组件配置
defineOptions({ name: 'q-avatar' })
const props = defineProps({ ...avatarProps })

// 计算属性，类名
const classList = computed(() => {
  return [
    typeof props.size === 'number' ? '' : `q-avatar__${props.size}`,
    props.round ? 'q-avatar__round' : '',
  ]
})

// 计算属性，样式
const styles = computed(() => {
  return {
    '--q-avatar-size': typeof props.size === 'number' ? `${props.size}px` : '',
  }
})
</script>