<template>
  <div :class="emptyClass">

    <!-- 顶部内容 -->
    <div :class="ns.name('icon')">
      <slot name="icon">
        <q-icon size="3em"><emptyIcon/></q-icon>
      </slot>
    </div>

    <!-- 提示文本 -->
    <div :class="ns.name('text')">
       {{ text }}
    </div>

    <!-- 底部内容 -->
    <div :class="ns.name('extra')">
      <slot name="extra"></slot>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { emptyProps } from './empty'
import { useNameSpace } from '@qii-ui/hooks'
import { QIcon } from '../../Icon'
import { emptyIcon } from '@qii-ui/icons'

// 组件配置
defineOptions({
  name: 'q-empty',
  inheritAttrs: true,
})

// 组件属性
const props = defineProps({ ...emptyProps })

// 组件类名
const ns = useNameSpace('empty')
const emptyClass = computed(() => [
  ns.nameSpace,
])

</script>