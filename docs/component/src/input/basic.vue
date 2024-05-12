<template>
  <q-space>
    <q-input v-model="text" placeholder="写点啥呢..."/>
    <p>输入：{{ text }}</p>
  </q-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const text = ref('')
</script>