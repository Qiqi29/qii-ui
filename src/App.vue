<script setup lang="ts">
import { ref } from 'vue'

const loaderState = ref(false)
const setLoader = () => {
  loaderState.value = true
  setTimeout(() => {
    loaderState.value = false
  }, 2000)
}
</script>

<template>
  <div>
    <h2>你好世界</h2>

    <q-space>
      <q-button type="primary" loading>停不下来</q-button>
      <q-button type="primary" :loading="loaderState" icon="add" @click="setLoader">点我</q-button>
      <q-button type="default" :loading="loaderState" @click="setLoader">点我</q-button>
    </q-space>


  </div>
</template>

<style>
:root {
  font-size: 14px;
}
</style>
