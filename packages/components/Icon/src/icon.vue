<template>
  <span :class="iconClass" >
    <i :style="iconStyle">
      
      <!-- 默认插槽，放置SVG图标 -->
      <slot></slot>
      
      <!-- 插槽为空，使用 name 属性 -->
      <svg v-if="!$slots.default">
        <use :xlink:href="`#icon-${props.name}`"></use>
      </svg>
  
    </i>
  </span>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from 'vue'
import { iconProps } from './icon'
import { useNS } from '@qii-ui/hooks'

// 组件配置
defineOptions({ 
  name: 'q-icon',
  inheritAttrs: true
})

// 解构属性
const props = defineProps({ ...iconProps })

// 组件类名
const ns = useNS('icon')
const iconClass = computed(() => [
  ns.nameSpace,
  ns.is(props.spin, 'spin'),
])

// 组件样式
const iconStyle = computed<CSSProperties>(() => { return {
  color: props.color,
  fontSize: props.size,
  transform: `rotate(${props.rotate}deg)`,
}})

</script>