<template>
  <button
    :class="buttonClass"
    :style="buttonStyle"
    :disabled="disabled"
    @click="onClick"
    >

    <q-icon :class="[ns.n('icon-loading')]" v-if="loading" size="1.35em" spin><loadIcon/></q-icon>
    <q-icon :class="ns.n('icon-left')" v-if="!loading && icon" :name="icon" size="1.25em"/>
    <span :class="ns.n('text')"><slot></slot></span>
    <q-icon :class="ns.n('icon-right')" v-if="rightIcon" :name="rightIcon" size="1.25em"/>

  </button>
</template>

<script lang="ts" setup>
import { computed, useSlots, inject } from 'vue'
import { useNS } from '../../../hooks/useNS'
import { buttonProps, buttonEmits } from './button'
const slots = useSlots()
// 引入依赖组件
import QIcon from '../../Icon'
import loadIcon from '../../../styles/icons/loading.vue'


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
  ns.is(props.bg, 'has-bg'),
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