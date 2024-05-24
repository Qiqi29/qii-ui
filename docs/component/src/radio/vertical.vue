<template>
  <q-radio-group v-model="radioValue" :options="radioOptions" size="large" vertical/>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const radioValue = ref('A')
const radioOptions = [
  { label: '垂直', value: 'A' },
  { label: '排列', value: 'B' },
  { label: '的', value: 'C' },
  { label: '选项', value: 'D' },
]
</script>