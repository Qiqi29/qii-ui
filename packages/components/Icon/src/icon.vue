<template>
  <span :class="iconClass" >
    <i :style="iconStyle">
      
      <!-- 默认插槽，放置SVG图标 -->
      <slot></slot>
      
      <!-- 插槽无内容，使用 name 属性图标 -->
      <svg v-if="!slots.default">
        <use :xlink:href="`#icon-${props.name}`"></use>
      </svg>
  
    </i>
  </span>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import { iconProps } from './icon'
import { useNS } from '../../../hooks/useNS'
const slots = useSlots()

defineOptions({ 
  name: 'q-icon',
  inheritAttrs: true
})

const props = defineProps({ ...iconProps })

const ns = useNS('icon')
const iconClass = computed(() => [
  ns.nameSpace,
  ns.is(props.spin, 'spin'),
])

const iconStyle = computed(() => { return {
  color: props.color,
  fontSize: props.size,
  transform: `rotate(${props.rotate}deg)`,
}})

</script>