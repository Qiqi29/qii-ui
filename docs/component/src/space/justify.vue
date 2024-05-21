<template>
  <q-space fill>
    <q-radio-group v-model="radioValue" :options="radioOptions" button/>
    <q-space :justify="radioValue">
      <q-button type="primary">选项 1</q-button>
      <q-button type="primary">选项 2</q-button>
      <q-button type="primary">选项 3</q-button>
    </q-space>
  </q-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const radioValue = ref('start')
const radioOptions = [
  { label: 'start', value: 'start' },
  { label: 'center', value: 'center' },
  { label: 'end', value: 'end' },
  { label: 'space-between', value: 'space-between' },
]
</script>