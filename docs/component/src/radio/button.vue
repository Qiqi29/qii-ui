<template>
  <q-radio-group v-model="radioValue" :options="radioOptions" button/>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const radioValue = ref('A')
const radioOptions = [
  { label: '这是', value: 'A' },
  { label: '按钮', value: 'B' },
  { label: '样式的', value: 'C' },
  { label: '选项', value: 'D' },
]
</script>