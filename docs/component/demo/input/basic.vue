<template>
  <q-space size="medium" direction="center">
    <q-input v-model="value" placeholder="随便写点什么.."/>
    <div>{{ value }}</div>
  </q-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value = ref('')
</script>