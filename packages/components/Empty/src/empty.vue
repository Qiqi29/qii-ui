<template>
  <div :class="emptyClass">

    <div :class="ns.name('icon')">
      <slot name="icon">
        <q-icon size="3em"><emptyIcon/></q-icon>
      </slot>
    </div>

    <div v-if="text" :class="ns.name('text')">
       {{ text }}
    </div>

    <div v-if="$slots.extra" :class="ns.name('extra')">
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

defineOptions({
  name: 'q-empty',
  inheritAttrs: true,
})

const props = defineProps({ ...emptyProps })

const ns = useNameSpace('empty')
const emptyClass = computed(() => [
  ns.nameSpace,
])
</script>