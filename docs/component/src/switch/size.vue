<template>
  <q-space direction="center">
    <q-switch v-model="value" size="small" />
    <q-switch v-model="value" size="medium" />
  </q-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value = ref<boolean>(false)
</script>