<!-- 头像组件 -->
<template>
  <div :class="avatarClass" :style="avatarStyle" ref="avatarRef">
    
    <!-- 默认插槽，显示自定义内容 -->
    <div class="q-avatar__content" ref="contentRef">
      <slot></slot>
    </div>
    
    <!-- 头像图片 -->
    <img v-if="src" :src="src" alt="">

  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, watch, onUpdated } from 'vue'
import { useNS } from '../../../hooks/useNS'
import { avatarProps } from './avatar'

// 组件配置
defineOptions({ 
  name: 'q-avatar',
  inheritAttrs: true
})

// 引入外部定义的属性
const props = defineProps({ ...avatarProps })

// 类名生成
const ns = useNS('avatar')
const avatarClass = computed(() => {
  return [
    ns.nameSpace,
    ns.n(props.shape),
    ns.t(props.size, 'string'),
  ]
})

// 计算属性，样式
const avatarStyle = computed(() => {
  return {
    '--q-avatar-size': typeof props.size === 'number' ? `${props.size}px` : '',
    ...props.style,
  }
})


/**
 * 插槽内容自适应头像大小
 * 通过获取头像与文本的dom宽度，计算需要的缩放比例
 */
const avatarRef = ref()
const contentRef = ref()

const autoSize = () => {
  const textWidth = contentRef.value.clientWidth;
  const avatarWidth = avatarRef.value.clientWidth;
  const scale = avatarWidth / (textWidth + 10);  
  contentRef.value.style.transform = `scale(${scale > 1.3 ? 1.3 : scale})`;
}

// 监听组件内容更新，执行计算
onMounted(() => autoSize())
onUpdated(() => autoSize())
watch(() => props.size, () => autoSize())
</script>