<template>
  <q-scrollbar height="300px" native>
    <div class="content">
      <div class="item" v-for="i in count" :key="i">
        {{ i }}
      </div>
    </div>
  </q-scrollbar>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(10)
</script>

<style scoped>
.content {
  width: 100%;
  padding-right: 6px;
}
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