<!-- 按钮组件 -->
<template>
  <button
    class="q-button"
    :class="classList"
    :style="styles"
    :disabled="disabled"
    @click="__onClick"
    >

    <div v-if="loading || icon" class="q-button__icon">
      <q-icon v-if="loading" class="loading-icon" name="loading" size="1.34em" color="inherit"/>
      <q-icon v-if="!loading && icon" :name="icon" size="1.34em" color="inherit"/>
    </div>
    <span class="q-button__text"><slot></slot></span>

  </button>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'
const slots = useSlots()

// 引入外部定义的类型
import { buttonProps, buttonEmits } from './button'

// 组件配置
defineOptions({ 
  name: 'q-button',
  inheritAttrs: false
})
// 解构使用定义的Props
const props = defineProps({ ...buttonProps })

// 计算属性，类名
const classList = computed(() => {
  return [
    `q-button__${props.type}`,
    `q-button-shape__${props.shape}`,
    typeof props.size === 'string' ? `q-button-size__${props.size}` : '',
    props.plain ? 'q-button-style__plain' : '',
    props.text ? 'q-button-style__text' : '',
    props.long ? 'q-button-style__long' : '',
    props.loading ? 'q-button__loading' : '',
    props.disabled || props.loading ? 'q-button__disabled' : '',
    !slots.default ? 'is-empty' : '',
  ]
})
// 计算属性 样式
const styles = computed(() => {
  return {
    height: typeof props.size === 'number' ? `${props.size}px` : '',
  }
})

// 解构使用定义的Emits
const emits = defineEmits({ ...buttonEmits })

// 点击事件
const __onClick = (event: MouseEvent) => {
  if (props.disabled) return;
  if (props.loading) return;
  emits('click', event)
}

</script>