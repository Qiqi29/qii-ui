<template>
  <q-space size="large" direction="center">
    <q-input v-model="text" placeholder="写点啥呢..."/>
    <span>输入：{{ text }}</span>
  </q-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const text = ref('')
</script>