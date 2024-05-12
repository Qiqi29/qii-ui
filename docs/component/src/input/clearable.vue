<template>
  <q-input v-model="text" placeholder="挺好用..." clearable/>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const text = ref('你好，世界！')
</script>