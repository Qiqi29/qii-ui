<!-- 按钮组件 -->
<template>
  <button
    :class="buttonClass"
    :style="buttonStyle"
    :disabled="disabled"
    @click="__onClick"
    >

    <q-icon v-if="loading" size="1.34em"><loadIcon/></q-icon>
    <q-icon v-if="!loading && icon" :name="icon" size="1.34em"/>
    <span class="q-button__text"><slot></slot></span>

  </button>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import { useNS } from '../../../hooks/useNS'
import loadIcon from '../../../styles/icons/loading.vue'

const slots = useSlots()

// 引入外部定义的类型
import { buttonProps, buttonEmits } from './button'

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
    ns.is(props.loading, 'loading'),
    ns.is(props.disabled || props.loading, 'disabled'),
    ns.is(!slots.default, 'empty'),
  ]
})


// 计算属性 样式
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