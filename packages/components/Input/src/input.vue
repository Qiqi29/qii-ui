<!-- 输入框组件 -->
<template>
  <div 
    :class="inputClass" 
    :style="{width: long ? '100%' : width + 'px'}"
    @click="handleDivClick"
    > 
    
    <!-- 插槽，输入框前置内容 -->
    <span v-if="$slots.prepend" class="q-input__prepend">
      <slot name="prepend"></slot>
    </span>

    <!-- 输入框主体 -->
    <input 
      ref="inputRef"
      v-bind="$attrs"
      :class="modelValue === '' ? 'is-empty' : ''"
      :type="inputType"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :minlength="minlength"
      :readonly="readonly"
      :disabled="disabled"
      @input="handleInput"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
    >

    <!-- 清除按钮 -->
    <q-icon v-if="showClear" @click="onClear" class="input-icon icon-clear" size="1.3em"><iconClose /></q-icon>
    
    <!-- 密码显示隐藏按钮 -->
    <q-icon v-if="showPasswordBtn && passwordVisible" class="input-icon icon-eye" @click="switchPassword" size="1.3em"><iconEye /></q-icon>
    <q-icon v-if="showPasswordBtn && !passwordVisible" size="1.3em" class="input-icon icon-eye" @click="switchPassword"><iconEyeClose /></q-icon>

    <!-- 插槽，输入框后置内容 -->
    <span v-if="$slots.append" class="q-input__append">
      <slot name="append"></slot>
    </span>

  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch, onMounted } from 'vue'
import { inputProps, inputEmits } from './input'
import { useNS } from '../../../hooks/useNS'
// 图标
import iconClose from '../../../styles/icons/close.vue'
import iconEye from '../../../styles/icons/eye.vue'
import iconEyeClose from '../../../styles/icons/eye-close.vue'

// 组件配置
defineOptions({ 
  name: 'q-input',
  inheritAttrs: false
})

// 引入属性
const props = defineProps({ ...inputProps })
const emits = defineEmits({ ...inputEmits })

// 类名生成
const ns = useNS('input')
const inputClass = computed(() => {
  return [
    ns.nameSpace,
    ns.n(props.size),
    ns.is(props.disabled, 'disabled'),
  ]
})


// 绑定输入框
const inputRef = ref<HTMLInputElement | null>(null)

// 获取并设置输入框的 value 值为双向绑定的值
const setInputValue = () => {
  const inputElement = inputRef.value
  if (!inputElement) return
  inputElement.value = String(props.modelValue)
}
// 输入框 Dom 加载完成执行一次，初始化数据
onMounted(() => {
  setInputValue()
})
// 监听输入框双向绑定值的改变
watch(() => props.modelValue, () => {
  setInputValue()
})


/**
 * 计算属性，判断是否显示密码显隐按钮
 */
const showPasswordBtn = computed(() => {
  return props.showPassword && props.modelValue && !props.disabled && !props.readonly;
})
// 密码可见状态，会改变输入框类型和显示的图标
const passwordVisible = ref(false)
const switchPassword = () => {
  passwordVisible.value = !passwordVisible.value
}

/**
 * 计算属性，输入框的类型
 * 如果启用密码显隐功能，则根据密码当前状态返回对应的类型
 * 否则直接返回输入框类型
 */
 const inputType = computed(() => {
  return props.showPassword ? (passwordVisible.value ? 'text' : 'password') : props.type;
})

/**
 * 计算属性，判断是否显示清除按钮
 */
const showClear = computed(() => {
  return props.clearable && props.modelValue && !props.disabled && !props.readonly;
})
// 点击清除按钮，清空输入框内容和双向绑定的数据
const onClear = () => {
  emits('update:modelValue', '')
  emits('input', '')
  emits('clear')
}



/**
 * 输入事件
 * 通过 event 获取输入框的值，调用 emit 触发事件，实现双向绑定
 */
const handleInput = (e: Event) => {
  const inputValue = (e.target as HTMLInputElement).value
  emits('update:modelValue', inputValue)
  emits('input', inputValue)
}
/**
 * 改变事件
 * 输入框值发生变化时触发
 */
const handleChange = (e: Event) => {
  emits('change', (e.target as HTMLInputElement).value)
}
// 输入框获取焦点事件
const handleFocus = (e: FocusEvent) => {
  emits('focus', e)
}
// 输入框失去焦点事件
const handleBlur = (e: FocusEvent) => {
  emits('blur', e)
}


// 点击输入框中的任意内容，都会聚焦输入框
const handleDivClick = () => {
  inputRef.value?.focus()
}
</script>