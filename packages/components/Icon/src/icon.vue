<template>
  <i :class="iconClass" :style="iconStyle">
    <slot>
      <svg><use :xlink:href="`#icon-${name}`"></use></svg>
    </slot>
  </i>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from 'vue'
import { iconProps } from './icon'
// @ts-ignore
import { useNameSpace } from '@qii-ui/hooks'

// 组件配置
defineOptions({
  name: 'q-icon',
  inheritAttrs: true,
})

// 组件属性
const props = defineProps({ ...iconProps })

// 组件类名
const ns = useNameSpace('icon')
const iconClass = computed(() => [
  ns.nameSpace,
  ns.is(props.spin, 'spin'),
])

// 组件样式
const iconStyle = computed<CSSProperties>(() => ({
  color: props.color,
  fontSize: props.size,
  "--q-icon-rotate": props.rotate + "deg"
}))
</script>