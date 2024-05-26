<template>
  <div :class="avatarClass" :style="avatarStyle" ref="avatarRef">
    
    <!-- 默认插槽 -->
    <div class="q-avatar__slot" ref="slotRef">
      <slot></slot>
    </div>
    
    <!-- 头像图片 -->
    <img v-if="src && !$slots.default" :src="src" alt="">

  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUpdated } from 'vue'
import { avatarProps } from './avatar'
import { useNS } from '@qii-ui/hooks'

// 组件配置
defineOptions({ 
  name: 'q-avatar',
  inheritAttrs: true
})

// 使用外部定义的属性
const props = defineProps({ ...avatarProps })

// 组件命名空间
const ns = useNS('avatar')
const avatarClass = computed(() => [
  ns.nameSpace,
  ns.n(props.shape),
  ns.t(props.size, 'string'),
])

// 计算属性，样式
const avatarStyle = computed(() => { return {
  '--q-avatar-size': typeof props.size === 'number' ? `${props.size}px` : '',
}})

/**
 * 插槽内容自适应头像大小
 * 使用 ref 绑定节点，获取头像与文本的dom宽度，计算响应的缩放比例。
 */
const avatarRef = ref()
const slotRef = ref()
const autoSize = () => {
  const slotWidth = slotRef.value.clientWidth;
  const avatarWidth = avatarRef.value.clientWidth;
  const scale = avatarWidth / (slotWidth + 10);  
  slotRef.value.style.transform = `scale(${scale > 1.3 ? 1.3 : scale})`;
}

// 监听组件内容更新，重新计算
onMounted(() => autoSize())
onUpdated(() => autoSize())

</script>