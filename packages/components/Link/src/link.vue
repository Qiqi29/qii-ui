<!-- 按钮组件 -->
<template>
  <a 
    :class="linkClass" 
    :href="href" 
    @click.prevent="__onClick">
    <q-icon v-if="icon === ''" :name="icon" size="1em"><linkIcon/></q-icon>
    <q-icon v-if="icon" :name="icon" size="1em"/>
    <slot></slot>
  </a>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { linkProps } from './link'
import { useNS } from '../../../hooks/useNS'
import linkIcon from '../../../styles/icons/link.vue'


defineOptions({ 
  name: 'q-link',
  inheritAttrs: true
})

const props = defineProps({ ...linkProps })

// 类名生成
const ns = useNS('link')
const linkClass = computed(() => {
  return [
    ns.nameSpace,
    ns.n(props.type),
    ns.is(props.disabled, 'disabled'),
    ns.has(props.line, 'line')
  ]
})


// 点击事件，如果链接为空或被禁用，不会跳转
const __onClick = () => {
  if (!props.href || props.disabled) return
  if (props.open === 'newTab') window.open(props.href);
  if (props.open === 'replace') window.location.replace(props.href);
  if (props.open === 'push') window.location.href = props.href;
}
</script>