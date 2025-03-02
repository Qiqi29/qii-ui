<template>
  <div :class="avatarClass" :style="avatarStyle" ref="avatarRef">

    <div :class="ns.name('slot')" ref="slotRef">
      <slot></slot>
    </div>

    <img v-if="src && !$slots.default" :src="src" alt="">

  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUpdated, inject, CSSProperties } from 'vue'
import { avatarProps } from './avatar'
import { useNameSpace } from '@qii-ui/hooks'

// 组件配置
defineOptions({
  name: 'q-avatar',
  inheritAttrs: true
})

// 组件属性
const props = defineProps({ ...avatarProps })

// 接收父组件传值，优先使用头像组的参数
const avatarGroup: any = inject('avatarGroup', '')
const avatarSize = computed(() => avatarGroup.size?.value || props.size)
const avatarShape = computed(() => avatarGroup.shape?.value || props.shape)

// 组件类名
const ns = useNameSpace('avatar')
const avatarClass = computed(() => [
  ns.nameSpace,
  ns.type(avatarSize.value, 'string'),
  ns.name(avatarShape.value),
])

// 组件样式
const avatarStyle = computed<CSSProperties>(() => ({
  width: avatarSize.value + 'px',
  height: avatarSize.value + 'px',
  borderRadius: avatarShape.value === 'square' ? avatarSize.value / 12 + 2 + 'px' : '',
}))

/**
 * 插槽内容自适应头像大小
 * 使用 ref 绑定元素，获取头像与插槽的dom宽度，计算相应的缩放比例
 */
const avatarRef = ref<HTMLElement>()
const slotRef = ref<HTMLElement>()
const autoSize = () => {
  const scale = avatarRef.value!.clientWidth / (slotRef.value!.clientWidth + 12)
  slotRef.value!.style.transform = `scale(${scale > 1.3 ? 1.3 : scale})`
}

// 监听组件内容更新，重新计算
onMounted(() => autoSize())
onUpdated(() => autoSize())
</script>