<template>
  <button
    :class="buttonClass"
    :style="buttonStyle"
    :disabled="disabled"
    @click="onClick"
    >

    <!-- 加载图标、自定义图标、按钮文本、右侧图标 -->
    <q-icon class="q-button__icon-loading q-is-loading" v-if="loading" size="1.4em"><loadIcon/></q-icon>
    <q-icon v-if="!loading && icon" :name="icon" size="1.25em"/>
    <span class="q-button__text"><slot></slot></span>
    <q-icon class="q-button__icon-right" v-if="rightIcon" :name="rightIcon" size="1.25em"/>

  </button>
</template>

<script lang="ts" setup>
import { computed, useSlots, inject } from 'vue'
import { useNS } from '../../../hooks/useNS'
import { buttonProps, buttonEmits } from './button'
import loadIcon from '../../../styles/icons/loading.vue'
const slots = useSlots()

// 组件配置
defineOptions({ 
  name: 'q-button',
  inheritAttrs: false
})

// 解构属性
const props = defineProps({ ...buttonProps })
const emits = defineEmits({ ...buttonEmits })

// 接收父组件传值
const buttonGroup: any = inject('buttonGroup', '')

// 组件类名
const ns = useNS('button')
const buttonClass = computed(() => [
  ns.nameSpace,
  ns.n(buttonGroup.type?.value || props.type),
  ns.n(props.shape),
  ns.t(buttonGroup.size?.value || props.size, 'string'),
  ns.is(props.plain, 'plain'),
  ns.is(props.text, 'text'),
  ns.is(props.long, 'long'),
  ns.is(props.rightIcon, 'has-right-icon'),
  ns.is(props.loading, 'loading'),
  ns.is(!slots.default, 'empty'),
  ns.is(props.disabled || props.loading, 'disabled'),
])

// 计算属性，样式
const buttonStyle = computed(() => { return {
  height: typeof props.size === 'number' ? `${props.size}px` : '',
}})

// 点击事件
const onClick = (event: MouseEvent) => {
  if (props.disabled || props.loading) return;
  emits('click', event)
}

</script>