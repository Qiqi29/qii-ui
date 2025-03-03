<template>
  <q-input v-model="text" placeholder="哈哈哈哈哈" :maxlength="10" word-limit/>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const text = ref('')
</script>