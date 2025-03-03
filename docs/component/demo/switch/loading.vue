<template>
  <q-switch v-model="value" loading/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value = ref(true)
</script>