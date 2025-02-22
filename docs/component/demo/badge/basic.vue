<template>
  <q-space size="large" direction="center">
    
    <q-badge :count="count">
      <q-avatar shape="square"/>
    </q-badge>
    
    <q-badge :count="count" dot>
      <q-avatar shape="square"/>
    </q-badge>
    
    <q-badge :count="count">
      <q-button-group type="primary">
        <q-button @click="reduce">减</q-button>
        <q-button @click="add">加</q-button>
      </q-button-group>
    </q-badge>
    
  </q-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(5)
const add = () => { count.value++ }
const reduce = () => { count.value-- }
</script>