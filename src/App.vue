<script setup lang="ts">
import { ref } from 'vue'

const loader = ref(false)
const setLoader = () => {
  loader.value = true
  setTimeout(() => {
    loader.value = false
  }, 2000)
}
</script>

<template>
  <div>
    <h2>你好世界</h2>

    <q-space>
      <q-button type="primary" size="small">选项 1</q-button>
      <q-button type="primary" size="medium">选项 2</q-button>
      <q-button type="primary" size="large" :loading="loader" @click="setLoader">点我</q-button>
    </q-space>

  </div>
</template>

<style>
:root {
  font-size: 14px;
}
</style>
