<script setup lang="ts">
import { ref } from 'vue'

const loader = ref(false)
const setLoader = () => {
  loader.value = true
  setTimeout(() => {
    loader.value = false
  }, 2000)
}

const input = ref('')
const switch1 = ref(false)
</script>

<template>
  <div>
    <h2>你好世界</h2>

    <q-space>
      <q-avatar>你</q-avatar>
      <q-button type="primary">选项 1</q-button>
      <q-button type="primary" icon="search">选项 2</q-button>
      <q-icon name="box"/>
      <q-link href="https://www.baidu.com">百度</q-link>
      <q-link href="https://www.baidu.com" icon>百度</q-link>
      <q-input v-model="input" placeholder="请输入内容" clearable/>
      <q-input v-model="input" placeholder="请输入内容" icon="search"/>
      <q-switch v-model="switch1"/>
    </q-space>

  </div>
</template>

<style>
:root {
  font-size: 14px;
}
</style>
