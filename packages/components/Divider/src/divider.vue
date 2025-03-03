<template>
  <div :class="dividerClass" :style="dividerStyle">
    
    <template v-if="!vertical">
        <div :class="[ns.name('line'), ns.name('line--left')]"></div>
        <div v-if="$slots.default" :class="ns.name('title')">
            <slot></slot>
        </div>
        <div v-if="$slots.default" :class="[ns.name('line'), ns.name('line--right')]"></div>
    </template>

  </div>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from 'vue'
import { dividerProps } from './divider'
import { useNameSpace } from '@qii-ui/hooks'

// 组件配置
defineOptions({ 
  name: 'q-divider',
  inheritAttrs: true,
})

// 组件属性
const props = defineProps({ ...dividerProps })

// 组件类名
const ns = useNameSpace('divider')
const dividerClass = computed(() => [
  ns.nameSpace,
  ns.name('title--' + props.titlePosition),
  ns.is(props.vertical, 'vertical'),
])

// 组件样式
const dividerStyle = computed<CSSProperties>(() => ({
  height: props.vertical ? '1em' : props.space,
}))
</script>