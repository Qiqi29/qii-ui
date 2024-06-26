<template>
  <div :class="avatarClass" :style="avatarStyle" ref="avatarRef">
    
    <!-- 默认插槽，放置自定义内容 -->
    <div :class="ns.n('slot')" ref="slotRef">
      <slot></slot>
    </div>
    
    <!-- 头像图片 -->
    <img v-if="src && !$slots.default" :src="src" alt="">

  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUpdated, inject } from 'vue'
import { avatarProps } from './avatar'
import { useNS } from '@qii-ui/hooks'

// 组件配置
defineOptions({ 
  name: 'q-avatar',
  inheritAttrs: true
})

// 组件属性
const props = defineProps({ ...avatarProps })

// 接收父组件传值
const avatarGroup: any = inject('avatarGroup', '')
// 计算属性，优先使用父组件的值
const avatarSize = computed(() => {
  return avatarGroup.size?.value || props.size
})

// 组件类名
const ns = useNS('avatar')
const avatarClass = computed(() => [
  ns.nameSpace,
  ns.n(avatarGroup.shape?.value || props.shape),
  ns.t(avatarSize.value, 'string'),
])

// 组件样式
const avatarStyle = computed(() => { return {
  '--q-avatar-size': typeof avatarSize.value === 'number' ? `${avatarSize.value}px` : '',
}})

/**
 * 插槽内容自适应头像大小
 * 使用 ref 绑定节点，获取头像与文本的dom宽度，计算相应的缩放比例
 */
const avatarRef = ref()
const slotRef = ref()
const autoSize = () => {
  const slotWidth = slotRef.value.clientWidth;
  const avatarWidth = avatarRef.value.clientWidth;
  const scale = avatarWidth / (slotWidth + 12);  
  slotRef.value.style.transform = `scale(${scale > 1.3 ? 1.3 : scale})`;
}

// 监听组件内容更新，重新计算
onMounted(() => autoSize())
onUpdated(() => autoSize())

</script>