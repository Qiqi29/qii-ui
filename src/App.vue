<script setup lang="ts">
import { ref } from 'vue'
const count = ref(10)
</script>

<template>
  <div>
    <q-scrollbar height="100vh">
      <div class="item" v-for="i in count" :key="i">
        {{ i }}
      </div>
    </q-scrollbar>
  </div>
</template>

<style>
:root {
  font-size: 14px;
}
body {
  margin: 0;
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
