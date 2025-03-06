<template>
  <div :class="badgeClass">

    <slot></slot>

    <div v-if="count > 0 || text" :class="ns.name('mark')" :style="badgeStyle">
      <span v-if="text" :class="ns.name('text')">{{ text }}</span>
      <span v-else-if="!dot">{{ badgeMaxCount }}</span>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots, Slots, CSSProperties } from 'vue'
import { useNameSpace } from '@qii-ui/hooks'
import { badgeProps } from './badge'
const slots = useSlots() as Slots

defineOptions({ 
  name: 'q-badge',
  inheritAttrs: true,
})

const props = defineProps({ ...badgeProps })

const ns = useNameSpace('badge')
const badgeClass = computed(() => [
  ns.nameSpace,
  ns.is(props.dot, 'dot'),
  ns.is(!slots.default, 'empty'),
])

const badgeStyle = computed<CSSProperties>(() => ({
  background: props.color ? props.color : `var(--q-color-${props.type})`
}))

const badgeMaxCount = computed(() => {
  return props.count > props.max ? `${props.max}+` : props.count;
})
</script>