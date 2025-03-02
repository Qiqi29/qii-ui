<template>
  <a :class="linkClass" :href="href" @click.prevent="handleClick">
    
    <q-icon v-if="icon === ''" size="1em"><linkIcon/></q-icon>
    <q-icon v-if="icon" :name="icon" size="1em"/>
    <slot></slot>

  </a>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useNameSpace } from '@qii-ui/hooks'
import { linkProps } from './link'
import { QIcon } from '../../Icon'
import { linkIcon } from '@qii-ui/icons'

// 组件配置
defineOptions({ 
  name: 'q-link',
  inheritAttrs: false,
})

// 组件属性
const props = defineProps({ ...linkProps })

// 组件类名
const ns = useNameSpace('link')
const linkClass = computed(() => [
  ns.nameSpace,
  ns.name(props.type),
  ns.is(props.disabled, 'disabled'),
  ns.is(props.line, 'has-line')
])

// 点击事件
function handleClick() {
  if (!props.href || props.disabled) return
  if (props.open === 'new') window.open(props.href)
  if (props.open === 'replace') window.location.replace(props.href)
  if (props.open === 'push') window.location.href = props.href
}
</script>