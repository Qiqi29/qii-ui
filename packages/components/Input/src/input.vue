<template>
  <div :class="inputClass" :style="{ 'width': width }" @click="handleClickInput">
    
    <!-- prepend 插槽，输入框前置内容 -->
    <span v-if="$slots.prepend" :class="ns.name('prepend')">
      <slot name="prepend"></slot>
    </span>

    <!-- 左侧图标 -->
    <q-icon v-if="icon" :name="icon" :class="ns.name('icon-left')" size="1.35em"/>

    <input 
      ref="inputRef"
      v-bind="$attrs"
      :value="modelValue"
      :placeholder="placeholder"
      :type="inputType"
      :maxlength="maxlength"
      :readonly="readonly"
      :disabled="disabled"
      @input="handleInput"
      @change="handleChange"
      @focus="(e) => emits('focus', e)"
      @blur="(e) => emits('blur', e)"
    >

    <!-- 清除按钮 -->
    <q-icon v-if="showClear" @click="onClear" :class="ns.name('icon-clear')" size="1.3em"><closeIcon/></q-icon>

    <!-- 密码显示隐藏按钮 -->
    <q-icon v-if="showPasswordBtn && passwordVisible" :class="ns.name('icon-eye')" @click="switchPassword" size="1.3em"><eyeIcon/></q-icon>
    <q-icon v-if="showPasswordBtn && !passwordVisible" size="1.3em" :class="ns.name('icon-eye')" @click="switchPassword"><eyeCloseIcon/></q-icon>

    <!-- 字数统计 -->
    <div v-if="maxlength && wordLimit" :class="ns.name('word-limit')">
      {{ wordLimitValue }}
    </div>

    <!-- 右侧图标 -->
    <q-icon v-if="rightIcon" :name="rightIcon" :class="ns.name('icon-right')" size="1.35em"/>

    <!-- append 插槽，输入框后置内容 -->
    <span v-if="$slots.append" :class="ns.name('append')">
      <slot name="append"></slot>
    </span>

  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, watch } from 'vue'
import { inputProps, inputEmits } from './input'
import { useNameSpace } from '@qii-ui/hooks'
import { QIcon } from '../../Icon'
import { closeIcon, eyeIcon, eyeCloseIcon } from '@qii-ui/icons'

// 组件配置
defineOptions({ 
  name: 'q-input',
  inheritAttrs: true,
})

// 组件属性
const props = defineProps({ ...inputProps })
const emits = defineEmits({ ...inputEmits })

// 组件类名
const ns = useNameSpace('input')
const inputClass = computed(() => [
  ns.nameSpace,
  ns.name(props.size),
  ns.is(props.disabled, 'disabled'),
])


// 绑定输入框
const inputRef = ref<HTMLInputElement|null>()


/**
 * 点击输入框任意内容，聚焦输入框
 */
const handleClickInput = () => {
  inputRef.value?.focus()
}
onMounted(() => {
  // 判断是否默认聚焦输入框
  if (props.autofocus) {
    inputRef.value?.focus()
  }
})


/**
 * 计算属性：判断是否显示清除按钮
 */
const showClear = computed(() => {
  return props.clearable && props.modelValue && !props.disabled && !props.readonly
})


/**
 * 计算属性：判断是否显示密码显隐按钮
 */
const showPasswordBtn = computed(() => {
  return props.password && props.modelValue && !props.disabled && !props.readonly
})
const passwordVisible = ref(false)
const switchPassword = () => {
  passwordVisible.value = !passwordVisible.value
}


/**
 * 计算属性：输入框类型
 */
 const inputType = computed(() => {
  return props.password ? (passwordVisible.value ? 'text' : 'password') : props.type
})


/**
 * 计算属性：字数统计
 */
const wordLimitValue = computed(() => {
  return `${props.modelValue.length}/${props.maxlength}`
})
// 判断字数是否超出限制
watch(() => props.modelValue, (newValue, oldValue) => {
  if (!props.maxlength) return
  if (newValue.length > props.maxlength) {
    emits('update:modelValue', oldValue)
    emits('input', oldValue)
  }
})


/**
 * 事件：输入框输入时触发
 */
const handleInput = (e: Event) => {
  const value = (e.target as HTMLInputElement).value
  emits('update:modelValue', value)
  emits('input', value)
}

/**
 * 事件：输入框值发生改变时触发
 */
 const handleChange = (e: Event) => {
  emits('change', (e.target as HTMLInputElement).value)
}

/**
 * 事件：点击清除按钮
 */
const onClear = () => {
  emits('update:modelValue', '')
  emits('input', '')
  emits('clear')
}

</script>