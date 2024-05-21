<template>
  <q-scrollbar height="fit-content" always>
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
  display: flex;
}
.item {
  flex-shrink: 0;
  margin-bottom: 12px; 
  width: 100px; 
  height: 100px;
  line-height: 100px;
  border-radius: 10px;
  background: var(--q-color-primary-l);
  color: var(--q-color-primary);
  font-size: 18px;
  text-align: center;
}
.item:not(:first-child) {
  margin-left: 12px;
}
</style>