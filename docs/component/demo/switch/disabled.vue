<template>
  <q-space size="large">
    <q-switch disabled />
    <q-switch v-model="value" :disabled="true" shape="square"/>
  </q-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value = ref(true)
</script>