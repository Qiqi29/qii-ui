<template>
    <div :class="badgeClass">
      
      <!-- 默认插槽，放置需要徽标的内容 -->
      <slot></slot>

      <div v-if="count !== 0 || text" :class="ns.n('mark')" :style="badgeStyle">
        <span v-if="text" :class="ns.n('text')">{{ text }}</span>
        <span v-else-if="!dot">{{ badgeMaxCount }}</span>
      </div>

    </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import { badgeProps } from './badge'
import { useNS } from '@qii-ui/hooks'
const slots = useSlots()

// 组件配置
defineOptions({ 
  name: 'q-badge',
  inheritAttrs: true
})

// 组件属性
const props = defineProps({ ...badgeProps })

// 组件类名
const ns = useNS('badge')
const badgeClass = computed(() => [
  ns.nameSpace,
  ns.is(props.dot, 'dot'),
  ns.is(!slots.default, 'empty'),
])

// 组件样式
const badgeStyle = computed(() => { return {
  background: props.color ? props.color : `var(--q-color-${props.type})`
}})

// 计算属性：判断是否超过最大值
const badgeMaxCount = computed(() => {
  return props.count > props.max ? `${props.max}+` : props.count;
})

</script>