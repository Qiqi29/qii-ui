<template>
  <q-input v-model="text" placeholder="小心点，我已经知道你的密码了（" password/>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const text = ref('114514')
</script>