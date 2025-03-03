<template>
  <q-input v-model="text" placeholder="还挺好用" clearable/>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const text = ref('你最好不要点这个')
</script>