<template>
  <q-radio-group v-model="radioValue" :options="radioOptions" button/>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const radioValue = ref('A')
const radioOptions = [
  { label: '按钮', value: 'A' },
  { label: '样式的', value: 'B' },
  { label: '选项', value: 'C' },
]
</script>