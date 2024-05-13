<template>
  <q-space direction="center" :size="22">
    <q-switch 
      v-model="value" 
      checked-color="#ff0000" 
      unchecked-color="#0000ff"
    />
  </q-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value = ref<boolean>(false)
</script>