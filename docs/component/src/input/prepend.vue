<template>
  <q-space vertical>
    <q-input v-model="number" placeholder="请输入手机号" clearable>
      <template #prepend> +86 </template>
    </q-input>
    <q-input v-model="email" placeholder="请输入邮箱" clearable>
      <template #append> .com </template>
    </q-input>
  </q-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const number = ref<number>()
const email = ref<string>()
</script>