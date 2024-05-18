<template>
  <q-radio-group v-model="radioValue">
    <q-radio :value="1">选项 1</q-radio>
    <q-radio :value="2">选项 2</q-radio>
    <q-radio :value="3">选项 3</q-radio>
  </q-radio-group>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const radioValue = ref(1)
</script>