<template>
  <i :class="iconClass" :style="iconStyle">
    <slot>
      <svg><use :xlink:href="`#icon-${name}`"></use></svg>
    </slot>
  </i>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from 'vue'
// @ts-ignore
import { useNameSpace } from '@qii-ui/hooks'
import { iconProps } from './icon'

defineOptions({
  name: 'q-icon',
  inheritAttrs: true,
})

const props = defineProps({ ...iconProps })

const ns = useNameSpace('icon')
const iconClass = computed(() => [
  ns.nameSpace,
  ns.is(props.spin, 'spin'),
])

const iconStyle = computed<CSSProperties>(() => ({
  color: props.color,
  fontSize: props.size,
  "--q-icon-rotate": props.rotate + "deg"
}))
</script>