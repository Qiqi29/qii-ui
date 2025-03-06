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
import { useNameSpace } from '@qii-ui/hooks'
import { avatarProps } from './avatar'

defineOptions({
  name: 'q-avatar',
  inheritAttrs: true,
})

const props = defineProps({ ...avatarProps })

// 接收父组件传值，优先使用头像组的参数
const avatarGroup: any = inject('avatarGroup', '')
const avatarSize = computed(() => avatarGroup.size?.value || props.size)
const avatarShape = computed(() => avatarGroup.shape?.value || props.shape)

const ns = useNameSpace('avatar')
const avatarClass = computed(() => [
  ns.nameSpace,
  ns.type(avatarSize.value, 'string'),
  ns.name(avatarShape.value),
])

const avatarStyle = computed<CSSProperties>(() => ({
  width: avatarSize.value + 'px',
  height: avatarSize.value + 'px',
  borderRadius: avatarShape.value === 'square' ? avatarSize.value / 12 + 2 + 'px' : '',
}))

// 内容大小自适应
const avatarRef = ref<HTMLElement>()
const slotRef = ref<HTMLElement>()
const autoSize = () => {
  const scale = avatarRef.value!.clientWidth / (slotRef.value!.clientWidth + 12)
  slotRef.value!.style.transform = `scale(${scale > 1.3 ? 1.3 : scale})`
}
onMounted(() => autoSize())
onUpdated(() => autoSize())
</script>