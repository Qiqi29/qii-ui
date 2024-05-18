<template>
  <q-space size="large" direction="start" vertical>
    <q-radio-group v-model="radioValue" :options="radioOptions" button/>
    <q-space :size="radioValue">
      <q-button type="primary">选项 1</q-button>
      <q-button type="primary">选项 2</q-button>
      <q-button type="primary">选项 3</q-button>
    </q-space>
  </q-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const radioValue = ref('small')
const radioOptions = [
  { label: 'small', value: 'small' },
  { label: 'medium', value: 'medium' },
  { label: 'large', value: 'large' },
]
</script>