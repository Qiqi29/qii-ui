<template>
  <div :class="dividerClass" :style="dividerStyle">
    
    <template v-if="!vertical">
      <div :class="[ns.name('line'), ns.name('line-left')]"></div>
      <div v-if="$slots.default" :class="ns.name('title')">
          <slot></slot>
      </div>
      <div v-if="$slots.default" :class="[ns.name('line'), ns.name('line-right')]"></div>
    </template>

  </div>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from 'vue'
import { dividerProps } from './divider'
import { useNameSpace } from '@qii-ui/hooks'

defineOptions({ 
  name: 'q-divider',
  inheritAttrs: true,
})

const props = defineProps({ ...dividerProps })

const ns = useNameSpace('divider')
const dividerClass = computed(() => [
  ns.nameSpace,
  ns.name(props.titlePosition),
  ns.is(props.vertical, 'vertical'),
])

const dividerStyle = computed<CSSProperties>(() => ({
  height: props.vertical ? '1em' : props.space,
}))
</script>