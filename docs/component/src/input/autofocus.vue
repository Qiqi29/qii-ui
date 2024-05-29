<template>
  <q-input v-model="text" placeholder="写点啥呢..." autofocus/>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const text = ref('帮你选中啦')
</script>