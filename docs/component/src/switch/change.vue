<template>
  <q-space direction="center" :size="22">
    <q-switch 
      v-model="value_1" 
      :before-change="change_1"
    />
    <q-switch 
      v-model="value_2" 
      :before-change="change_2"
    />
  </q-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value_1 = ref<boolean>(false)
const value_2 = ref<boolean>(false)

const change_1 = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return true;
}
const change_2 = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return false;
}

</script>