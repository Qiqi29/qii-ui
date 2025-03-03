<template>
  <q-space vertical>
    
    <q-input v-model="number" placeholder="输入手机号" size="large" clearable>
      <template #prepend>
        <q-icon name="phone" size="1.4em"/>
      </template>
    </q-input>
    
    <q-input v-model="email" placeholder="输入邮箱"  size="large" clearable>
      <template #append> .com </template>
    </q-input>

  </q-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const number = ref<number>()
const email = ref<string>()
</script>