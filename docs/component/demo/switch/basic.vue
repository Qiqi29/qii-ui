<template>
  <q-space size="large">

    <q-switch />
    <q-switch v-model="value" />

</q-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value = ref(false)
</script>