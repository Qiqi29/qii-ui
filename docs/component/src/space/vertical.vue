<template>
  <q-space vertical fill>
    <q-space>
      <span>vertical</span>
      <q-switch v-model="verticalVlaue"/>
      <span>fill</span>
      <q-switch v-model="fillVlaue"/>
    </q-space>
    <q-space :vertical="verticalVlaue" :fill="fillVlaue">
      <q-button type="primary" long>选项 1</q-button>
      <q-button type="primary" long>选项 2</q-button>
      <q-button type="primary" long>选项 3</q-button>
    </q-space>
  </q-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const verticalVlaue = ref(true)
const fillVlaue = ref(true)
</script>