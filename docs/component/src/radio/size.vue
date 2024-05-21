<template>
  <q-space vertical direction="start" size="large">
    <q-radio-group v-model="radioValue" :size="radioValue" button>
      <q-radio value="small">small</q-radio>
      <q-radio value="medium">medium</q-radio>
      <q-radio value="large">large</q-radio>
    </q-radio-group>
    <q-radio-group v-model="radioValue" :size="radioValue">
      <q-radio value="small">small</q-radio>
      <q-radio value="medium">medium</q-radio>
      <q-radio value="large">large</q-radio>
    </q-radio-group>
  </q-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const radioValue = ref('medium')
</script>