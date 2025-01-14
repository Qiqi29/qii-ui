<template>
  <q-space size="large" direction="center">
    <q-avatar :style="{ background: '#3280FF' }">{{ list[index] }}</q-avatar>
    <q-button @click="onClick">切换</q-button>
  </q-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const list = ['你好', '呀', '欢迎使用', 'Qii-UI', '组件库']
const index = ref(0)

const onClick = () => {
  index.value = index.value >= list.length - 1 ? 0 : index.value + 1;
}
</script>