<template>
  <q-space size="large">

    <q-switch v-model="value" checked-icon="check" unchecked-icon="close"/>
    <q-switch v-model="value" checked-icon="moon" unchecked-icon="sun"/>
  
  </q-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value = ref(false)
</script>