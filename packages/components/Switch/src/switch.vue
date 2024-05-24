<!-- 开关组件 -->
<template>
  <div :class="switchClass">
    
    <label>
      <!-- 输入框，单选按钮样式，隐藏 -->
      <input type="checkbox" @change="onChange">

      <!-- 自定义的开关，使用label绑定 -->
      <div class="slider" :style="sliderStyle">
        <div class="slider-button">
        
          <!-- 加载图标 -->
          <q-icon 
            v-if="_loadingState" 
            class="loadIcon" 
            size="1.02em" 
            :color="iconColor"
            spin >
            <loadIcon/>
          </q-icon>
        
          <!-- 开启关闭时自定义图标 -->
          <q-icon v-if="modelValue && !_loadingState && checkedIcon" :name="checkedIcon" size="0.9em" :color="iconColor"/>
          <q-icon v-if="!modelValue && !_loadingState && uncheckedIcon" :name="uncheckedIcon" size="0.9em" :color="iconColor"/>

        </div>
      </div>

    </label>

  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useNS } from '../../../hooks/useNS'
import { isFunction } from '../../../utils'
import { SwitchProps, SwitchEmits } from './switch'
import QIcon from '../../Icon'
import loadIcon from '../../../styles/icons/loading.vue'


defineOptions({ 
  name: 'q-switch',
  inheritAttrs: true
})

const props = defineProps({ ...SwitchProps })
const emits = defineEmits({ ...SwitchEmits })

const ns = useNS('switch')
const switchClass = computed(() => {
  return [
    ns.nameSpace,
    ns.n(props.size),
    ns.is(props.modelValue, 'open'),
    ns.is(props.loading, 'loading'),
    ns.is(props.disabled || _loadingState.value, 'disabled'),
  ]
})

// 开关背景色，自定义
const sliderStyle = computed(() => { return {
  backgroundColor: props.modelValue ? props.checkedColor : props.uncheckedColor,
}})

// 开关图标颜色
const iconColor = computed(() => {
  return props.modelValue ? 'var(--q-color-primary)' : '#aaaaab';
})

// 加载状态
const _loading = ref(props.loading)
const _loadingState = computed(() => _loading.value || props.loading )

// 切换开关状态
const onUpdate = () => {
  emits('update:modelValue', !props.modelValue)
  emits('change', !props.modelValue)
}

/**
 * 点击开关执行
 * 判断 beforeChange 是否启用，启用执行异步切换
 * 函数返回 true ，执行 onChange，返回 false，不执行切换。
 * beforeChange 不为 function，直接执行 onChange
 */
const onChange = async () => {
  if (props.disabled || _loadingState.value) return;
  if (isFunction(props.beforeChange)) {
    _loading.value = true
    const result = await props.beforeChange(!props.modelValue)
    if (result) onUpdate()
    _loading.value = false
  } else {
    onUpdate()
  }
}
</script>