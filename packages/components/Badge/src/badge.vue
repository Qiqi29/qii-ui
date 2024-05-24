<template>
  <div :class="badgeClass">
    
    <!-- 默认插槽，放置绑定组件 -->
    <slot></slot>

    <!-- 徽标 -->
    <div 
      v-if="count !== 0 || text" 
      :class="ns.n('mark')"
      :style="badgeStyle"
      >
      <span v-if="text">{{ text }}</span>
      <span v-else-if="!dot">{{ badgeMaxCount }}</span>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import { badgeProps } from './badge'
import { useNS } from '../../../hooks/useNS'
const slots = useSlots()

defineOptions({ 
  name: 'q-badge',
  inheritAttrs: true
})

const props = defineProps({ ...badgeProps })

const ns = useNS('badge')
const badgeClass = computed(() => [
  ns.nameSpace,
  ns.is(props.dot, 'dot'),
  ns.is(!slots.default, 'empty'),
])

// 最大值
const badgeMaxCount = computed(() => {
  return props.count > props.maxCount ? `${props.maxCount}+` : props.count;
})

const badgeStyle = computed(() => { return {
  background: props.color ? props.color : `var(--q-color-${props.type})`
}})

</script>