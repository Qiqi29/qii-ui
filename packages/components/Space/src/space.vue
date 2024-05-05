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
 * 获取插槽内的组件，规范化为组件数组
 */
const slots = useSlots()
// 处理插槽内容，为默认插槽的每个组件添加q-space__item包装
const processedSlots = computed(() => {
  // 获取默认插槽
  const defaultSlot = slots.default ? slots.default() : [];

  // 如果有默认插槽，处理每个元素
  return defaultSlot.map((vNode, index) => {
    // 保持原有属性并添加key以供Vue追踪
    const props = { ...vNode.props, key: `item-${index}` };

    // 如果是组件类型，直接保存组件信息
    if (vNode.component) {
      return { component: vNode.component, props };
    }
    
    // 如果是普通VNode（如文本节点），创建一个匿名组件来包裹它
    // 注意：在实际应用中可能需要更复杂的逻辑来处理各种VNode类型
    return { 
      component: { render: () => vNode }, // 包裹原始VNode的内容
      props
    }
  })
})
</script>