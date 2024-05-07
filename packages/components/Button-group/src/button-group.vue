<!-- 按钮组 组件 -->
<template>
  <div :class="buttonGroupClass" ref="buttonGroupRef">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUpdated } from 'vue'
import { useNS } from '../../../hooks/useNS'
import { buttonProps } from './button-group'

defineOptions({ 
  name: 'q-button-group',
  inheritAttrs: false
})

const props = defineProps({ ...buttonProps })

// 类名生成
const ns = useNS('button-group')
const buttonGroupClass = computed(() => {
  return [
    ns.nameSpace,
  ]
})


/**
 * 添加类型类名
 * 遍历按钮组中的子元素，给每个元素加上类名，统一控制样式
 */
const buttonGroupRef = ref()

const addClassName = () => {
  const buttons = buttonGroupRef.value.querySelectorAll('button')
  buttons.forEach((button: HTMLElement) => {
    button.classList.remove(`q-button__default`);
    button.classList.remove(`q-button__medium`);
    button.classList.add(`q-button__${props.type}`)
    button.classList.add(`q-button__${props.size}`)
  })
}
onMounted(() => addClassName())
onUpdated(() => addClassName())

</script>