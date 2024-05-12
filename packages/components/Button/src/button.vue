<!-- 按钮组件 -->
<template>
  <button
    :class="buttonClass"
    :style="buttonStyle"
    :disabled="disabled"
    @click="__onClick"
    >

    <!-- 加载图标、自定义图标、按钮文本、右侧图标 -->
    <q-icon class="q-button__icon-loading" v-if="loading" size="1.4em"><loadIcon/></q-icon>
    <q-icon v-if="!loading && icon" :name="icon" size="1.25em"/>
    <span class="q-button__text"><slot></slot></span>
    <q-icon class="q-button__icon-right" v-if="rightIcon" :name="rightIcon" size="1.25em"/>

  </button>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import { buttonProps, buttonEmits } from './button'
import { useNS } from '../../../hooks/useNS'
import loadIcon from '../../../styles/icons/loading.vue'
const slots = useSlots()

// 组件配置
defineOptions({ 
  name: 'q-button',
  inheritAttrs: false
})

// 解构配置属性
const props = defineProps({ ...buttonProps })
const emits = defineEmits({ ...buttonEmits })

// 类名生成
const ns = useNS('button')
const buttonClass = computed(() => {
  return [
    ns.nameSpace,
    ns.n(props.type),
    ns.n(props.shape),
    ns.t(props.size, 'string'),
    ns.is(props.plain, 'plain'),
    ns.is(props.text, 'text'),
    ns.is(props.long, 'long'),
    ns.is(props.rightIcon, 'right-icon'),
    ns.is(props.loading, 'loading'),
    ns.is(!slots.default, 'empty'),
    ns.is(props.disabled || props.loading, 'disabled'),
  ]
})

// 计算属性，样式
const buttonStyle = computed(() => {
  return {
    height: typeof props.size === 'number' ? `${props.size}px` : '',
  }
})

// 点击事件，禁用或加载中阻止点击事件
const __onClick = (event: MouseEvent) => {
  if (props.disabled) return;
  if (props.loading) return;
  emits('click', event)
}

</script>