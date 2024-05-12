<template>
  <q-input v-model="text" placeholder="别告诉我密码哦..." clearable show-password/>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const text = ref('123456')
</script>