<template>
    <div :class="demoClass" :style="demoStyle">
    
    </div>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from 'vue'
import { demoProps } from './demo'
import { useNameSpace } from '@qii-ui/hooks'

// 组件配置
defineOptions({ 
  name: 'q-demo',
  inheritAttrs: true
})

// 组件属性
const props = defineProps({ ...demoProps })

// 组件类名
const ns = useNameSpace('demo')
const demoClass = computed(() => [
  ns.nameSpace,
])

// 组件样式
const demoStyle = computed<CSSProperties>(() => ({
  background: '',
}))
</script>