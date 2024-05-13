<template>
  <q-space direction="center" :size="22">
    <q-switch loading/>
    <q-switch 
      v-model="value" 
      :before-change="change"
    />
  </q-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref<boolean>(false)

const change = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return true;
}

</script>