<template>
  <q-space direction="center" :size="22">
    <q-switch v-model="value" size="small" />
    <q-switch v-model="value" size="medium" />
    <q-switch v-model="value" size="large" />
  </q-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value = ref<boolean>(true)
</script>