<template>
    <div :class="badgeClass">
      
      <!-- 默认插槽，放置需要徽标的内容 -->
      <slot></slot>

      <div v-if="count > 0 || text" :class="ns.name('mark')" :style="badgeStyle">
        <span v-if="text" :class="ns.name('text')">{{ text }}</span>
        <span v-else-if="!dot">{{ badgeMaxCount }}</span>
      </div>

    </div>
</template>

<script lang="ts" setup>
import { computed, useSlots, Slots, CSSProperties } from 'vue'
import { badgeProps } from './badge'
import { useNameSpace } from '@qii-ui/hooks'
const slots = useSlots() as Slots

// 组件配置
defineOptions({ 
  name: 'q-badge',
  inheritAttrs: true,
})

// 组件属性
const props = defineProps({ ...badgeProps })

// 组件类名
const ns = useNameSpace('badge')
const badgeClass = computed(() => [
  ns.nameSpace,
  ns.is(props.dot, 'dot'),
  ns.is(!slots.default, 'empty'),
])

// 组件样式
const badgeStyle = computed<CSSProperties>(() => ({
  background: props.color ? props.color : `var(--q-color-${props.type})`
}))

// 计算属性：判断是否超过最大值
const badgeMaxCount = computed(() => {
  return props.count > props.max ? `${props.max}+` : props.count;
})

</script>