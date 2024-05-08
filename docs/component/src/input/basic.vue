<template>
  <q-space>
    <q-input v-model="text" placeholder="写点啥呢"/>
  </q-space>
  <p>{{ text }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const text = ref('')
</script>