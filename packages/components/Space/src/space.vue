<!-- 间距组件 -->
<template>
  <div class="q-space" :class="classList" :style="styles">

    <!-- 遍历插槽，渲染子项 -->
    <template v-for="slotItem in processedSlots" :key="slotItem.key">
      <div class="q-space__item" :style="itemStyles">
        <component :is="slotItem.component" v-bind="slotItem.props" />
      </div>
    </template>

  </div>
</template>

<script lang="ts" setup>
import { computed, CSSProperties, useSlots } from 'vue'
import { SpaceProps } from './space'
const slots = useSlots()

defineOptions({ 
  name: 'q-space',
  inheritAttrs: false
})

const props = defineProps({ ...SpaceProps })

// 计算属性，样式
const styles = computed<CSSProperties>(() => {
  return {
    "flex-direction": props.vertical ? 'column' : 'row',
    "gap": typeof props.size === 'number' ? props.size + 'px' : '',
    "align-items": props.direction,
    "width": props.fill ? '100%' : '',
  }
})

// 计算属性，子项样式
const itemStyles = computed<CSSProperties>(() => {
  return {
    "width": props.fill ? '100%' : '',
  }
})

// 计算属性，类名
const classList = computed(() => {
  return [  
    typeof props.size === 'string' ? 'q-space__' + props.size : '',
  ]
})


/**
 * 处理插槽内容，为默认插槽的每个组件添加 q-space__item 包装
 */
const processedSlots = computed(() => {
  // 获取默认插槽中的内容
  const defaultSlot = slots.default ? slots.default() : []
  // 遍历插槽内容
  return defaultSlot.map((vNode, index) => {
    
    // 保留原有属性并添加key以供Vue追踪
    const props = { 
      ...vNode.props, 
      key: `item-${index}`,
    }
    
    // 如果是组件类型，直接保存组件信息
    if (vNode.component) return { component: vNode.component, props }
    
    // 如果是普通VNode（如文本节点），创建一个匿名组件来包裹它
    return { component: { render: () => vNode }, props }
  })
})
</script>