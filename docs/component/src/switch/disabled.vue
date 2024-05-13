<template>
  <q-space direction="center" :size="22">
    <q-switch disabled />
    <q-switch v-model="value" :disabled="true" />
  </q-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value = ref<boolean>(true)
</script>