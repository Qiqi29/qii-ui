<template>
  <div :class="emptyClass">

    <!-- 具名插槽，图标或图片 -->
    <slot name="icon">
      <q-icon name="more" size="3em"><emptyIcon/></q-icon>
    </slot>

    <!-- 提示文本 -->
    <p class="q-empty__text">{{ text }}</p>

  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useNS } from '../../../hooks/useNS'
import { emptyProps } from './empty'
import QIcon from '../../Icon'
import emptyIcon from '../../../styles/icons/emipy.vue'

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