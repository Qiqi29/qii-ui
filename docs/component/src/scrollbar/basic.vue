<template>
  <q-space>
    <q-button @click="addCount">增加</q-button>
    <q-button @click="deleteCount">减少</q-button>
  </q-space>
  <q-scrollbar :height="400" always outside>
    <div class="item" v-for="i in count" :key="i">
      {{ i }}
    </div>
  </q-scrollbar>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(10)
const addCount = () => {
  count.value++
}
const deleteCount = () => {
  if (count.value <= 1) return;
  count.value--
}
</script>

<style scoped>
.item {
  width: 100%; 
  height: 80px; 
  line-height: 80px;
  border-radius: 10px;
  background: var(--q-color-primary-l);
  color: var(--q-color-primary);
  font-size: 18px;
  text-align: center;
}
.item:not(:last-child) {
  margin-bottom: 12px;
}
</style>