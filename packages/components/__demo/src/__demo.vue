<!--  -->
<template>
  <div class="" :style="__demoStyle">

  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { __demoProps } from './__demo'

defineOptions({ 
  name: 'q-__demo',
  inheritAttrs: true
})
const props = defineProps({ ...__demoProps })

const __demoStyle = computed(() => {
  return {

  }
})
</script>