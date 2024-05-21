<template>
  <q-space direction="center">
    <q-button type="primary">选项 1</q-button>
    <q-button type="primary">选项 2</q-button>
    <q-switch v-model="switchValue"/>
  </q-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const switchValue = ref(true)
</script>