<template>
  <label :class="radioClass">
    
    <!-- 原生 radio -->
    <input 
      ref="inputRef"
      type="radio"
      v-model="radioValue"
      :value="value"
      :disabled="disabled"
      @click.stop
    >
    <!-- 自定义 radio 样式 -->
    <span :class="[ns.n('slider')]"></span>
    <!-- 标签文本 -->
    <span :class="[ns.n('label')]"><slot/></span>

  </label>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'
import { radioProps } from './radio'
import { useNS } from '@qii-ui/hooks'

// 组件配置
defineOptions({ 
  name: 'q-radio',
  inheritAttrs: false
})

// 解构属性
const props = defineProps({ ...radioProps })
// 接收父组件传值
const radioGroup: any = inject('radioGroup', '')

// 组件命名空间
const ns = useNS('radio')
const radioClass = computed(() => [
  ns.nameSpace,
  ns.is(props.disabled, 'disabled'),
  ns.is(isChecked.value, 'checked'),
  ns.is(radioGroup.isButton.value, 'button'),
  ns.n(radioGroup.size.value),
])


/**
 * 计算属性，返回 双向绑定 的值
 * 如果值改变，更新双向绑定的值
 */
const radioValue = computed({
  get(){
    return radioGroup.modelValue.value
  },
  set(val){
    if (props.disabled) return;
    radioGroup.updateValue(val)
  }
})

/**
 * 计算属性，是否选中
 * 如果双向绑定的值等于当前选项的值，即选中
 */
const isChecked = computed(() => {
  return radioValue.value === props.value;
})
</script>