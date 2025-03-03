<template>
  <q-space size="large">

    <q-switch v-model="value" shape="round" />
    <q-switch v-model="value" shape="square"/>

  </q-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value = ref(true)
</script>