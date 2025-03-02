<template>
  <button 
    :class="buttonClass" 
    :style="buttonStyle"
    :disabled="disabled"
    @click="onClick">

    <q-icon :class="ns.name('icon-loading')" v-if="loading" size="1.35em" spin><loadingIcon/></q-icon>
    <q-icon :class="ns.name('icon-left')" v-if="!loading && icon" :name="icon" size="1.25em"/>
    <span :class="ns.name('text')"><slot></slot></span>
    <q-icon :class="ns.name('icon-right')" v-if="rightIcon" :name="rightIcon" size="1.25em"/>
  
  </button>
</template>

<script lang="ts" setup>
import { computed, useSlots, Slots, CSSProperties, inject } from 'vue'
import { buttonProps, buttonEmits } from './button'
import { useNameSpace } from '@qii-ui/hooks'
const slots = useSlots() as Slots

// 引入图标
import { QIcon } from '../../Icon'
// @ts-ignore
import { loadingIcon } from '@qii-ui/icons'


// 组件配置
defineOptions({ 
  name: 'q-button',
  inheritAttrs: false
})

// 组件属性
const props = defineProps({ ...buttonProps })
const emits = defineEmits({ ...buttonEmits })

// 接收按钮组属性
const buttonGroup: any = inject('buttonGroup', '')

// 组件类名
const ns = useNameSpace('button')
const buttonClass = computed(() => [
  ns.nameSpace,
  ns.name(buttonGroup.type?.value || props.type),
  ns.type(buttonGroup.size?.value || props.size, 'string'),
  ns.name(props.shape),
  ns.is(props.plain, 'plain'),
  ns.is(props.text, 'text'),
  ns.is(props.bg, 'has-bg'),
  ns.is(props.long, 'long'),
  ns.is(props.rightIcon, 'has-right-icon'),
  ns.is(props.loading, 'loading'),
  ns.is(props.disabled || props.loading, 'disabled'),
  ns.is(!slots.default, 'empty'),
])

// 组件样式
const buttonStyle = computed<CSSProperties>(() => ({
  height: typeof props.size === 'number' ? `${props.size}px` : '',
}))

// 点击事件
const onClick = (event: MouseEvent) => {
  if (props.disabled || props.loading) return;
  emits('click', event)
}
</script>