<template>
  <q-switch v-model="value" checked-color="#F83D91" unchecked-color="#6DBAA1" shape="square"/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value = ref(false)
</script>