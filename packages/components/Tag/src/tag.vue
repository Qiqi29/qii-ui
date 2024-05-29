<template>
  <span :class="tagClass" :style="tagStyle" @click="handleClick">
    
    <!-- icon 插槽，自定义图标 -->
    <div :class="ns.n('icon')">
      <slot name="icon">
        <q-icon v-if="icon" :name="icon" size="1.1em"/>
      </slot>
    </div>

    <!-- 默认插槽，标签文案 -->
    <slot></slot>

    <!-- 加载图标 -->
    <div v-if="loading" :class="ns.n('loading')">
      <q-icon size="1.1em" spin><loadingIcon/></q-icon>
    </div>

    <!-- 关闭按钮 -->
    <div v-else-if="closable" :class="ns.n('close')" @click.stop="handleClose">
      <q-icon size="1em"><closeIcon/></q-icon>
    </div>

  </span>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from 'vue'
import { tagProps, tagEmits } from './tag'
import { useNS } from '@qii-ui/hooks'
import { QIcon } from '../../Icon'
import { closeIcon, loadingIcon } from '../../../styles/icons/index'


// 组件配置
defineOptions({ 
  name: 'q-tag',
  inheritAttrs: true
})

// 组件属性
const props = defineProps({ ...tagProps })
const emits = defineEmits({ ...tagEmits })

// 组件类名
const ns = useNS('tag')
const tagClass = computed(() => [
  ns.nameSpace,
  ns.n(props.type),
  ns.n(props.size),
  ns.is(props.bordered, 'bordered'),
  ns.is(props.round, 'round'),
  ns.is(props.fill, 'fill'),
  ns.is(props.color?.text || props.color?.bg, 'custom'),
  ns.is(props.loading, 'loading'),
  ns.is(props.disabled, 'disabled'),
])

// 组件样式
const tagStyle = computed(() => {
  const style = <CSSProperties>{}
  if (props.color) {
    style.color = props.color.text;
    style.borderColor = props.color.border;
    style.backgroundColor = props.color.bg;
  }
  return style
})


// 事件: 点击标签
const handleClick = (event: MouseEvent) => {
  if (props.disabled || props.loading) return
  emits('click', event)
}
// 事件: 点击关闭按钮
const handleClose = (event: MouseEvent) => {
  if (props.disabled || props.loading) return
  emits('close', event)
}
</script>