<template>
  <div :class="emptyClass">

    <!-- icon 插槽，自定义顶部内容 -->
    <div :class="ns.n('icon')">
      <slot name="icon">
        <q-icon name="more" size="3em"><emptyIcon/></q-icon>
      </slot>
    </div>
    
    <!-- 提示文本 -->
    <div :class="ns.n('text')">
      <span>{{ text }}</span>
    </div>
    
    <!-- extra 插槽，在底部添加额外内容 -->
    <div :class="ns.n('extra')">
      <slot name="extra"></slot>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useNS } from '@qii-ui/hooks'
import { emptyProps } from './empty'
import { QIcon } from '../../Icon'
import { emptyIcon } from '@qii-ui/icons'

defineOptions({ 
  name: 'q-empty',
  inheritAttrs: false
})

defineProps({ ...emptyProps })

const ns = useNS('empty')
const emptyClass = computed(() => [
  ns.nameSpace,
])

</script>