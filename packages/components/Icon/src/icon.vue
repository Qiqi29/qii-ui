<template>
  <span :class="iconClass" >

    <i :style="iconStyle">
      <!-- 默认插槽，放置自定义SVG图标，内容为空显示默认值 -->
      <slot>
        <svg><use :xlink:href="`#icon-${name}`"></use></svg>
      </slot>
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

// 组件属性
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