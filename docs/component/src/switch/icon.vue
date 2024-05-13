<template>
  <q-space :size="22">
    <q-switch v-model="value" checked-icon="check" unchecked-icon="close"/>
    <q-switch v-model="value" checked-icon="moon" unchecked-icon="sun"/>
  </q-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value = ref<boolean>(false)
</script>