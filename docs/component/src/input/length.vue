<template>
  <q-input v-model="text" placeholder="请输入几个字" :maxlength="10" show-word-limit clearable/>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const text = ref('')
</script>