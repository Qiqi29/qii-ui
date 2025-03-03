<template>
  <div :class="switchClass">
    <label>

      <input type="checkbox" @change="onChange">
      
      <div class="track" :style="switchStyle">
        <div class="thumb">

          <q-icon  v-if="loadingState" size="1em" spin>
            <loadingIcon/>
          </q-icon>

          <q-icon v-if="modelValue && !loadingState && checkedIcon" :name="checkedIcon" size="0.9em"/>
          <q-icon v-if="!modelValue && !loadingState && uncheckedIcon" :name="uncheckedIcon" size="0.9em"/>

        </div>
      </div>

    </label>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, CSSProperties } from 'vue'
import { switchProps, switchEmits } from './switch'
import { useNameSpace } from '@qii-ui/hooks'
import { isFunction } from '@qii-ui/utils'
import { QIcon } from '../../Icon'
import { loadingIcon } from '@qii-ui/icons'

// 组件配置
defineOptions({ 
  name: 'q-switch',
  inheritAttrs: true,
})

// 组件属性
const props = defineProps({ ...switchProps })
const emits = defineEmits({ ...switchEmits })

// 组件类名
const ns = useNameSpace('switch')
const switchClass = computed(() => [
  ns.nameSpace,
  ns.name(props.size),
  ns.name(props.shape),
  ns.is(props.modelValue, 'open'),
  ns.is(props.loading, 'loading'),
  ns.is(props.disabled || loadingState.value, 'disabled'),
])

// 加载状态
const loading = ref(props.loading)
const loadingState = computed(() => loading.value || props.loading)

// 组件样式
const switchStyle = computed<CSSProperties>(() => ({
  backgroundColor: props.modelValue ? props.checkedColor : props.uncheckedColor,
}))


/**
 * 事件：点击开关
 * 判断 beforeChange 是否为方法，启用异步切换
 */
async function onChange() {
  if (props.disabled || loadingState.value) return
  if (isFunction(props.beforeChange)) {
    loading.value = true
    const result = await props.beforeChange(!props.modelValue)
    if (result) onUpdate()
    loading.value = false
  } else {
    onUpdate()
  }
} 

// 更新开关状态
const onUpdate = () => {
  emits('update:modelValue', !props.modelValue)
  emits('change', !props.modelValue)
}
</script>