<template>
  <div :class="avatarGroupClass">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots, provide, readonly } from 'vue'
import { avatarGroupProps } from './avatar-group'
import { useNS, useFilterNodes } from '@qii-ui/hooks'
const slots = useSlots()

// 组件配置
defineOptions({ 
  name: 'q-avatar-group',
  inheritAttrs: false
})

// 使用外部定义的属性
const props = defineProps({ ...avatarGroupProps })

// 组件命名空间
const ns = useNS('avatar-group')
const avatarGroupClass = computed(() => [
  ns.nameSpace,
])

// 传值到子组件
provide('avatarGroup', {
  size: readonly(computed(() => props.size)),
  shape: readonly(computed(() => props.shape)),
})

// 获取默认插槽中的内容，遍历判断当前项是否超出max属性
const children = slots.default?.()
const avatarArray = useFilterNodes(children).filter((item, index) => {
  return index < props.max;
})

console.log(avatarArray);
</script>