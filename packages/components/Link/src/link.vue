<template>
  <a 
    :class="linkClass" 
    :href="href" 
    @click.prevent="onClick">

    <!-- icon 参数为真，显示自定义图标 -->
    <q-icon v-if="icon" :name="icon" size="1em"/>
    <!-- icon 参数为真，但值为空，显示默认图标 -->
    <q-icon v-if="icon === ''" :name="icon" size="1em"><linkIcon/></q-icon>
    
    <!-- 默认插槽，链接文案 -->
    <slot></slot>

  </a>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { linkProps } from './link'
import { useNS } from '@qii-ui/hooks'
import { QIcon } from '../../Icon'
import { linkIcon } from '../../../styles/icons'

defineOptions({ 
  name: 'q-link',
  inheritAttrs: false
})

const props = defineProps({ ...linkProps })

const ns = useNS('link')
const linkClass = computed(() => [
  ns.nameSpace,
  ns.n(props.type),
  ns.is(props.disabled, 'disabled'),
  ns.is(props.underline, 'has-underline')
])

/**
 * 点击事件
 * 如果链接为空或被禁用，不会跳转
 * 根据 open 属性，执行指定跳转方式
 */
const onClick = () => {
  if (!props.href || props.disabled) return

  if (props.open === 'newTab') window.open(props.href);
  if (props.open === 'replace') window.location.replace(props.href);
  if (props.open === 'push') window.location.href = props.href;
}
</script>