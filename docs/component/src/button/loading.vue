<template>
  <q-space>
    <q-button type="primary" loading>停不下来</q-button>
    <q-button type="primary" :loading="loader" icon="star" @click="setLoader">点我</q-button>
    <q-button type="default" :loading="loader" @click="setLoader">点我</q-button>
  </q-space>
</template>

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