<template>
  <q-radio-group v-model="radioValue" :options="radioOptions"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const radioValue = ref(1)
const radioOptions = [
  { label: '你好', value: 1 },
  { label: '世界', value: 2 },
  { label: '禁用', value: 3, disabled: true}
]
</script>